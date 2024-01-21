import { StyleSheet, Text, View } from 'react-native';
import { Meal } from '../../models/meal';
import { StyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

interface MealDetailProps {
  meal: Meal;
  style?: StyleProp<any>;
  textStyle?: StyleProp<any>;
}

export function MealDetail({ meal, style, textStyle }: MealDetailProps) {
  const { duration, affordability, complexity } = meal;
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

export default MealDetail;
