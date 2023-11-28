import { Platform, StyleSheet, Text } from 'react-native';
import { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    borderColor: 'white',
    textAlign: 'center',
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});

export default Title;
