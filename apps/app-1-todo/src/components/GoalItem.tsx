import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface GoalItemProps {
  data: string;
  index: number;
  deleteGoalHandler: (index: number) => void;
}
export function GoalItem({ data, deleteGoalHandler, index }: GoalItemProps) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => deleteGoalHandler(index)}
        android_ripple={{ color: '#210644' }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{data}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
  pressedItem: { opacity: 0.5 },
  goalText: {
    color: 'white',
    padding: 8,
    borderRadius: 6,
  },
});
