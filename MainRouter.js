//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity } from 'react-native';
import sideIcon from "./image/drawer.png";
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Home from './screens/Home';
import HomeContainer from './screens/HomeContainer';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Login from './screens/Login';
import Logout from './StartApp';

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();    
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={sideIcon}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#00b5ec', 
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen1_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Logout_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Logout: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
});

const Home_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: HomeContainer,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#00b5ec', 
      },
      headerTintColor: '#fff',
    }),
  },
});

//For React Navigation 3.+
export const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
 //https://img.icons8.com/color/48/000000/exit.png
  Home: {
    //Title
    screen: Home_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Image
         source={{uri: 'https://img.icons8.com/ultraviolet/40/000000/home.png'}}
          resizeMode="contain"
          style={{ width: 20, height: 20,}}
        />
      )
    },
  },

  LabelOne: {
    //Title
    screen: Screen1_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Label One',
      drawerIcon: ({ tintColor }) => (
        <Image
         source={{uri: 'https://img.icons8.com/ultraviolet/40/000000/tag-window.png'}}
          resizeMode="contain"
          style={{ width: 20, height: 20, }}
        />
      )
    },
  },

  LabelTwo: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Label Two',
      drawerIcon: ({ tintColor }) => (
        <Image
         source={{uri: 'https://img.icons8.com/ultraviolet/40/000000/tag-window.png'}}
          resizeMode="contain"
          style={{ width: 20, height: 20, }}
        />
      )
    },
  },
  Logout: {
    //Title
    screen: Logout_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Logout',
      drawerIcon: ({ tintColor }) => (
        <Image
         source={{uri: 'https://img.icons8.com/ultraviolet/40/000000/exit.png'}}
          resizeMode="contain"
          style={{ width: 20, height: 20, }}
        />
      )
    },
  },
 
});

export default createAppContainer(DrawerNavigatorExample);
