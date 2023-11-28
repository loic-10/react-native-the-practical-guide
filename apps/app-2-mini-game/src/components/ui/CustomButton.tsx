import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ReactNode } from 'react';
import Colors from '../../constants/colors';

interface CustomButtonProps {
  children: ReactNode;
  onPress?: () => void;
}

function CustomButton({ children, onPress }: CustomButtonProps) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => ({
          ...styles.buttonInnerContainer,
          ...((pressed && styles.pressed) || {}),
        })}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    elevation: 2,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});

export default CustomButton;
