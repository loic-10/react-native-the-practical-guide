import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';

interface GoalInputProps {
  addGoalHandler: (data: string) => void;
  closeModalHandler: () => void;
  visible: boolean;
}
export function GoalInput({
  addGoalHandler,
  visible,
  closeModalHandler,
}: GoalInputProps) {
  const [enteredGoalText, setEnteredGoalText] = useState(''),
    goalInputHandler = (text: string) => {
      setEnteredGoalText(text);
    },
    saveGoalHandler = () => {
      if (enteredGoalText) {
        addGoalHandler(enteredGoalText);
        setEnteredGoalText('');
        closeModalHandler();
      }
    };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={saveGoalHandler}
              color={'#57BD91'}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={closeModalHandler}
              color={'#EE6161'}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    padding: 16,
    backgroundColor: '#311b6b',
    gap: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
  },
});
