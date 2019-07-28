import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./screens/Login";
import HomeScreen from './MainRouter';
//import HomeScreen2 from './RootDrawer'
import TeamSelectScreen from './screens/DepartmentScreen';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator({
  Login : {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen:HomeScreen,
    navigationOptions:{
      header:null,
    },
  },
  TeamSelectPage: {
    screen:TeamSelectScreen,
    navigationOptions:{
      header:null,
    },
  }
});
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

  render() {
    return <AppContainer />;
  }
}