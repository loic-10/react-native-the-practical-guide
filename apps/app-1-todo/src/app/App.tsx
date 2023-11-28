/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Linking,
  Button,
  TextInput,
  GestureResponderEvent,
  FlatList,
} from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { StatusBar } from 'expo-status-bar';
import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';

export const App = () => {
  const [courseGoals, setCourseGoals] = useState([]),
    [modalIsVisible, setModalIsVisible] = useState(false),
    addGoalHandler = (goal) => {
      setCourseGoals((courseGoals) => [goal, ...courseGoals]);
    },
    deleteGoalHandler = (index: number) => {
      setCourseGoals((courseGoals) => {
        courseGoals.splice(index, 1);
        return [...courseGoals];
      });
    };

  return (
    <>
      <StatusBar style={'light'} />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color={'#a065ec'}
          onPress={() => setModalIsVisible(true)}
        />
        <GoalInput
          addGoalHandler={addGoalHandler}
          visible={modalIsVisible}
          closeModalHandler={() => setModalIsVisible(false)}
        />
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={({ item, index }) => (
              <GoalItem
                data={item}
                index={index}
                deleteGoalHandler={deleteGoalHandler}
              />
            )}
            keyExtractor={(_, index) => index}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    gap: 20,
  },
  goalContainer: {
    flex: 4,
  },
});

export default App;
