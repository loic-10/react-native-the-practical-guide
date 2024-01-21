/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { StyleSheet } from 'react-native';
import WelcomeScreen from '../screens/WelcomeScreen';
import UserScreen from '../screens/UserScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

export const App = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={'User'}>
        <Drawer.Screen name={'Welcome'} component={WelcomeScreen} />
        <Drawer.Screen name={'User'} component={UserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({});

export default App;
