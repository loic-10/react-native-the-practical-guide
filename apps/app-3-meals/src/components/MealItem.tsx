import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Meal } from '../models/meal';
import { useNavigation } from '@react-navigation/native';
import MealDetail from './MealDetail';

interface MealItemProps {
  meal: Meal;
}

export function MealItem({ meal }: MealItemProps) {
  const { id: mealId, title, imageUrl: uri } = meal,
    navigation = useNavigation<any>(),
    pressHandler = () => navigation.navigate('MealDetail', { mealId });
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          (pressed && styles.buttonPressed) || null,
        ]}
        onPress={pressHandler}
      >
        <View style={[styles.innerContainer]}>
          <Image style={styles.image} source={{ uri }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetail meal={meal} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: (Platform.OS === 'android' && 'hidden') || 'visible',
  },
  button: { flex: 1 },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
  },
});

export default MealItem;
