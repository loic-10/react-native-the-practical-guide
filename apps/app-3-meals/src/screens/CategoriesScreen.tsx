import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { Category } from '../models/category';
import CategoryGridTitle from '../components/CategoryGridTitle';
import { NavigationProp, Route } from '@react-navigation/native';

interface CategoriesScreenProps {
  route: Route<string, any>;
  navigation: NavigationProp<any>;
}

export function CategoriesScreen({ navigation }: CategoriesScreenProps) {
  const renderCategoryItem = (category: Category) => {
    const pressHandler = () =>
      navigation.navigate('MealsOverview', { categoryId: category.id });
    return <CategoryGridTitle category={category} onPress={pressHandler} />;
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => renderCategoryItem(item)}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
