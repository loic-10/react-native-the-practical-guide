import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Title from '../components/ui/Title';
import { useEffect, useMemo, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import CustomButton from '../components/ui/CustomButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';

interface GameScreenProps {
  userNumber: number;
  onGameOver: (numberOfRounds: number) => void;
}

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number
): number {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  return (
    (rndNum === exclude && generateRandomBetween(min, max, exclude)) || rndNum
  );
}

let minBoundary = 1,
  maxBoundary = 100;

export function GameScreen({ userNumber, onGameOver }: GameScreenProps) {
  const initialGuess = generateRandomBetween(1, 100, userNumber),
    [currentGuess, setCurrentGuess] = useState(initialGuess),
    [guessRounds, setGuessRounds] = useState([initialGuess]),
    { width, height } = useWindowDimensions(),
    nextGuessHandler = (direction: 'lower' | 'greater') => {
      if (
        (direction === 'lower' && currentGuess < userNumber) ||
        (direction === 'greater' && currentGuess > userNumber)
      ) {
        Alert.alert("Don't lie!", 'You know that this is wrong...', [
          { text: 'Sorry!', style: 'cancel', onPress: () => ({}) },
        ]);
        return;
      } else {
        if (direction === 'lower') {
          maxBoundary = currentGuess;
        } else {
          minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(
          minBoundary,
          maxBoundary,
          currentGuess
        );
        setCurrentGuess(newRndNumber);
        setGuessRounds((guessRounds) => [newRndNumber, ...guessRounds]);
      }
    },
    content = useMemo(
      () =>
        (width <= 500 && (
          <>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
              <InstructionText style={styles.instructionText}>
                Higher or lower?
              </InstructionText>
              <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                  <CustomButton onPress={() => nextGuessHandler('lower')}>
                    <Ionicons name="md-remove" size={24} color="white" />
                  </CustomButton>
                </View>
                <View style={styles.buttonContainer}>
                  <CustomButton onPress={() => nextGuessHandler('greater')}>
                    <Ionicons name="md-add" size={24} color="white" />
                  </CustomButton>
                </View>
              </View>
            </Card>
          </>
        )) || (
          <>
            <View style={styles.buttonsContainerWide}>
              <View style={styles.buttonContainer}>
                <CustomButton onPress={() => nextGuessHandler('lower')}>
                  <Ionicons name="md-remove" size={24} color="white" />
                </CustomButton>
              </View>
              <NumberContainer>{currentGuess}</NumberContainer>
              <View style={styles.buttonContainer}>
                <CustomButton onPress={() => nextGuessHandler('greater')}>
                  <Ionicons name="md-add" size={24} color="white" />
                </CustomButton>
              </View>
            </View>
          </>
        ),
      [width, currentGuess]
    );

  useEffect(() => {
    currentGuess === userNumber && onGameOver(guessRounds.length);
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessLogItem
              guess={item}
              roundNumber={guessRounds.length - index}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  instructionText: { marginBottom: 12 },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default GameScreen;
