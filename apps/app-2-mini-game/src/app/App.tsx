/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useMemo, useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import StartGameScreen from '../screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from '../screens/GameScreen';
import Colors from '../constants/colors';
import GameOverScreen from '../screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

export const App = () => {
  const [userNumber, setUserNumber] = useState(0),
    [gameIsOver, setGameIsOver] = useState(false),
    [guessRounds, setGuessRounds] = useState(0),
    pickedNumberHandler = (pickedNumber: number) => {
      setUserNumber(pickedNumber);
      setGameIsOver(false);
    },
    gameOverHandler = (numberOfRounds: number) => {
      setGuessRounds(numberOfRounds);
      setGameIsOver(true);
    },
    startNewGameHandler = () => {
      setUserNumber(0);
      setGuessRounds(0);
    },
    screenMemo = useMemo(
      () =>
        (userNumber &&
          ((gameIsOver && (
            <GameOverScreen
              userNumber={userNumber}
              roundsNumber={guessRounds}
              onStartNewGame={startNewGameHandler}
            />
          )) || (
            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
          ))) || <StartGameScreen onPickNumber={pickedNumberHandler} />,
      [userNumber, gameIsOver]
    ),
    [fontsLoaded] = useFonts({
      'open-sans': require('../../assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
    });

  return (
    <>
      <StatusBar style={'light'} />
      {(fontsLoaded && (
        <LinearGradient
          colors={[Colors.primary700, Colors.accent500]}
          style={styles.rootScreen}
        >
          <ImageBackground
            source={require('../../assets/images/background.jpg')}
            resizeMode="cover"
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}
          >
            <SafeAreaView style={styles.rootScreen}>{screenMemo}</SafeAreaView>
          </ImageBackground>
        </LinearGradient>
      )) || <AppLoading />}
    </>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

export default App;
