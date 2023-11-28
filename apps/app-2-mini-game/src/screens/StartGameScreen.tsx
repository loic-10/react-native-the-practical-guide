import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import CustomButton from '../components/ui/CustomButton';
import { useState } from 'react';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

interface StartGameScreenProps {
  onPickNumber: (pickNumber: number) => void;
}

function StartGameScreen({ onPickNumber }: StartGameScreenProps) {
  const [enteredNumber, setEnteredNumber] = useState(''),
    { height } = useWindowDimensions(),
    marginTop = (height < 380 && 30) || 100,
    numberInputHandler = (enteredText: string) => {
      setEnteredNumber(enteredText);
    },
    resetInputHandler = () => {
      setEnteredNumber('');
    },
    confirmInputHandler = () => {
      const chosenNumber = parseInt(enteredNumber);
      if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
        Alert.alert(
          'Invalid number',
          'Number has to be a number between 1 and 99.',
          [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
        );
      } else {
        onPickNumber(chosenNumber);
      }
    };

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop }]}>
          <Title>Guess my Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              autoCapitalize="none"
              keyboardType="number-pad"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <CustomButton onPress={resetInputHandler}>Reset</CustomButton>
              </View>
              <View style={styles.buttonContainer}>
                <CustomButton onPress={confirmInputHandler}>
                  Confirm
                </CustomButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const // { height } = Dimensions.get('window'),
  styles = StyleSheet.create({
    screen: { flex: 1 },
    rootContainer: {
      flex: 1,
      // marginTop: (height < 380 && 30) || 100,
      alignItems: 'center',
    },
    numberInput: {
      height: 50,
      width: 50,
      fontSize: 32,
      borderBottomColor: Colors.accent500,
      borderBottomWidth: 2,
      color: Colors.accent500,
      marginVertical: 8,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttonsContainer: {
      flexDirection: 'row',
    },
    buttonContainer: {
      flex: 1,
    },
  });

export default StartGameScreen;
