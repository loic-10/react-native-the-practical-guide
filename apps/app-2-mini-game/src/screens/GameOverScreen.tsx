import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import CustomButton from '../components/ui/CustomButton';
import { useMemo } from 'react';
import { ImageStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

interface GameOverScreenProps {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
}

export function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}: GameOverScreenProps) {
  const { width, height } = useWindowDimensions(),
    imageStyle = useMemo<ImageStyle>(() => {
      const imageSize = (width < 380 && 150) || (height < 400 && 80) || 300;
      return {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
      };
    }, [width, height]);
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require('../../assets/images/success.png')}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
          rounds to guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <CustomButton onPress={onStartNewGame}>Start New Game</CustomButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    // width: (width < 380 && 150) || 300,
    // height: (width < 380 && 150) || 300,
    // borderRadius: (width < 380 && 75) || 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
  screen: { flex: 1 },
});
Dimensions.get('window');

export default GameOverScreen;
