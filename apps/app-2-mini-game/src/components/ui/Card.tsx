import { Dimensions, StyleSheet, View } from 'react-native';
import { ReactNode } from 'react';
import Colors from '../../constants/colors';

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return <View style={styles.container}>{children}</View>;
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: (width < 380 && 18) || 36,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default Card;
