import { Category } from '../models/category';
import { Meal } from '../models/meal';

export const CATEGORIES: Category[] = [
  new Category('c1', 'Italian', '#fb4988'),
  new Category('c2', 'Quick & Easy', '#f8493f'),
  new Category('c3', 'Hamburgers', '#f5a442'),
  new Category('c4', 'Mexican', '#33ff57'),
  new Category('c5', 'Fast Food', '#5733ff'),
  new Category('c6', 'Japanese', '#ff33a6'),
  new Category('c7', 'Vegetarian', '#33ffbd'),
  new Category('c8', 'Dessert', '#a633ff'),
  new Category('c9', 'Indian', '#ffd633'),
  new Category('c10', 'Mediterranean', '#33ffc9'),
];

export const MEALS: Meal[] = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Spaghetti with Tomato Sauce',
    'affordable',
    'simple',
    'https://images.unsplash.com/photo-1614777986387-015c2a89b696?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '20',
    ['Spaghetti', 'Tomato Sauce', 'Salt', 'Pepper'],
    ['Boil water', 'Cook spaghetti', 'Heat tomato sauce', 'Mix everything'],
    true,
    false,
    true,
    true
  ),
  new Meal(
    'm2',
    ['c2'],
    'Toast Hawaii',
    'affordable',
    'simple',
    'https://images.unsplash.com/photo-1515041761709-f9fc96e04cd3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '10',
    ['White bread', 'Ham', 'Pineapple', 'Cheese', 'Tomato', 'Ketchup'],
    [
      'Put ham and pineapple on toast',
      'Add cheese',
      'Put in oven',
      'Add tomato and ketchup',
    ],
    true,
    false,
    false,
    true
  ),
  new Meal(
    'm3',
    ['c1'],
    'Spaghetti Bolognese',
    'Affordable',
    'Simple',
    'https://images.unsplash.com/photo-1589227365533-cee630bd59bd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '30 minutes',
    ['spaghetti', 'tomato sauce', 'ground beef', 'onions'],
    ['Cook the spaghetti', 'Brown the beef', 'Mix with sauce'],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm4',
    ['c4'],
    'Tacos',
    'Affordable',
    'Medium',
    'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '20 minutes',
    ['tortillas', 'ground beef', 'lettuce', 'tomatoes'],
    ['Cook the beef', 'Assemble the tacos'],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm5',
    ['c5'],
    'Burger',
    'Expensive',
    'Medium',
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '25 minutes',
    ['beef patty', 'bun', 'lettuce', 'cheese', 'onions'],
    ['Grill the patty', 'Assemble the burger'],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm6',
    ['c6'],
    'Sushi',
    'Expensive',
    'Complex',
    'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '45 minutes',
    ['rice', 'raw fish', 'seaweed', 'soy sauce'],
    ['Prepare sushi rice', 'Assemble sushi'],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm7',
    ['c7'],
    'Vegetarian Pizza',
    'Affordable',
    'Simple',
    'https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '30 minutes',
    ['pizza dough', 'tomato sauce', 'cheese', 'vegetables'],
    ['Roll out the dough', 'Top with ingredients', 'Bake in the oven'],
    true,
    false,
    true,
    true
  ),
  new Meal(
    'm8',
    ['c8'],
    'Chocolate Cake',
    'Affordable',
    'Medium',
    'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '40 minutes',
    ['flour', 'cocoa powder', 'sugar', 'eggs'],
    ['Mix ingredients', 'Bake in the oven', 'Frost with chocolate ganache'],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm9',
    ['c9'],
    'Chicken Curry',
    'Moderate',
    'Complex',
    'https://images.unsplash.com/photo-1631292784640-2b24be784d5d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '50 minutes',
    ['chicken', 'curry spices', 'coconut milk', 'rice'],
    ['Cook chicken', 'Simmer in curry sauce', 'Serve with rice'],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm10',
    ['c10'],
    'Greek Salad',
    'Affordable',
    'Simple',
    'https://images.unsplash.com/photo-1599021419847-d8a7a6aba5b4?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '15 minutes',
    ['lettuce', 'tomatoes', 'cucumber', 'feta cheese', 'olives'],
    ['Chop vegetables', 'Combine ingredients', 'Drizzle with olive oil'],
    true,
    true,
    true,
    true
  ),
  new Meal(
    'm11',
    ['c4', 'c8'],
    'Burrito Bowl',
    'Affordable',
    'Moderate',
    'https://images.unsplash.com/photo-1533606117812-0783e8e690f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '35 minutes',
    ['rice', 'black beans', 'chicken', 'avocado', 'salsa'],
    ['Cook rice', 'Grill chicken', 'Assemble bowl'],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm12',
    ['c5', 'c7'],
    'Vegetarian Wrap',
    'Affordable',
    'Simple',
    'https://images.unsplash.com/photo-1597564684117-4765e2c77af2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '20 minutes',
    ['tortilla', 'hummus', 'spinach', 'bell peppers'],
    ['Spread hummus on tortilla', 'Add vegetables', 'Wrap it up'],
    true,
    true,
    true,
    true
  ),
  new Meal(
    'm13',
    ['c3', 'c9'],
    'Chicken Katsu Curry',
    'Expensive',
    'Complex',
    'https://images.unsplash.com/photo-1543826173-1beeb97525d8?q=80&w=842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '50 minutes',
    ['chicken cutlet', 'curry sauce', 'rice'],
    ['Fry chicken cutlet', 'Simmer in curry sauce', 'Serve with rice'],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm14',
    ['c6', 'c8'],
    'Tempura Udon',
    'Moderate',
    'Complex',
    'https://images.unsplash.com/photo-1558985212-324add95595a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '40 minutes',
    ['udon noodles', 'tempura shrimp', 'green onions', 'dashi broth'],
    ['Cook udon noodles', 'Fry tempura shrimp', 'Serve in broth'],
    false,
    false,
    false,
    true
  ),
  new Meal(
    'm15',
    ['c10'],
    'Caprese Salad',
    'Affordable',
    'Simple',
    'https://images.unsplash.com/photo-1529312266912-b33cfce2eefd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    '15 minutes',
    ['tomatoes', 'mozzarella', 'basil', 'balsamic glaze'],
    [
      'Slice tomatoes and mozzarella',
      'Arrange with basil',
      'Drizzle with balsamic glaze',
    ],
    true,
    true,
    true,
    true
  ),
];
