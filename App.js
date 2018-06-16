/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  YellowBox
} from 'react-native';

import {
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';

import Splash from './screen/SplashScreen';
import Login from './screen/LoginScreen';
import Home from './screen/HomeScreen';
import History from './screen/HistoryScreen';
import News from './screen/NewsScreen';
import About from './screen/AboutScreen';
import Content from './screen/ContentDrawer';

const Drawer = createDrawerNavigator(
  {
    Splash: {
      screen: Splash
    },

  },
  {
    initialRouteName: "Splash",
    contentComponent: Content
  }
)

const Stack = createStackNavigator(
  {
    Drawer: {
      screen: Drawer
    },
    Login: {
      screen: Login
    },
    Home: {
      screen: Home
    },
    History: {
      screen: History
    },
    News: {
      screen: News
    },
    About: {
      screen: About
    }
  },
  {
    initialRouteName: "Home"
  }
)

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
  }

  render() {
    return (
      <Stack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
