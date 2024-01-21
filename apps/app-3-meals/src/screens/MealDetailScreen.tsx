import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { NavigationProp, Route } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import MealDetail from '../components/MealDetail';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

interface MealDetailScreenProps {
  route: Route<string, any>;
  navigation: NavigationProp<any>;
}

export function MealDetailScreen({ route, navigation }: MealDetailScreenProps) {
  const { mealId } = route.params || {},
    meal = MEALS.find(({ id }) => id === mealId),
    {
      title = '',
      imageUrl: uri = '',
      ingredients = [],
      steps = [],
    } = meal || {},
    headerButtonPressHandler = () => {
      console.log('Pressed!');
    };

  useLayoutEffect(() => {
    title &&
      navigation.setOptions({
        title,
        headerRight: () => (
          <IconButton icon={'star'} onPress={headerButtonPressHandler} />
        ),
      });
  }, [title, navigation, headerButtonPressHandler]);
  return (
    (meal && (
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{ uri }} />
        <Text style={styles.title}>{title}</Text>
        <MealDetail meal={meal} textStyle={styles.detailText} />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={steps} />
          </View>
        </View>
      </ScrollView>
    )) || <></>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
});

export default MealDetailScreen;
