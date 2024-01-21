import { FlatList, StyleSheet, View } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { NavigationProp, Route } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

interface MealsOverviewScreenProps {
  route: Route<string, any>;
  navigation: NavigationProp<any>;
}

export function MealsOverviewScreen({
  route,
  navigation,
}: MealsOverviewScreenProps) {
  const { categoryId } = route.params || {},
    displayedMeals = MEALS.filter(({ categoryIds }) =>
      categoryIds.includes(categoryId)
    );

  useLayoutEffect(() => {
    const { title = '' } = CATEGORIES.find(({ id }) => id === categoryId) || {};
    navigation.setOptions({ title });
  }, [categoryId, navigation]);
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={({ item }) => <MealItem meal={item} />}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
