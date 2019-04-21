import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./screens/Login";
import HomeScreen from './MainRouter';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Login : LoginScreen,
  Home: HomeScreen
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

  render() {
    return <AppContainer />;
  }
}