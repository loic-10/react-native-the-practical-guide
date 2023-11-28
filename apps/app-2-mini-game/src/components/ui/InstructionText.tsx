import { StyleProp, StyleSheet, Text } from 'react-native';
import { ReactNode } from 'react';
import Colors from '../../constants/colors';

interface InstructionTextProps {
  children: ReactNode;
  style?: StyleProp<any>;
}

function InstructionText({ children, style = {} }: InstructionTextProps) {
  return <Text style={[styles.container, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'open-sans',
    color: Colors.accent500,
    fontSize: 24,
  },
});

export default InstructionText;
