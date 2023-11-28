import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { ReactNode } from 'react';
import Colors from '../../constants/colors';

interface NumberContainerProps {
  children: ReactNode;
}

function NumberContainer({ children }: NumberContainerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: (width < 380 && 12) || 24,
    margin: (width < 380 && 12) || 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontFamily: 'open-sans-bold',
  },
});

export default NumberContainer;
