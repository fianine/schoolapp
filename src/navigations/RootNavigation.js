import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import LoginScreen from '../routes/Login/components/Login';
import HomeScreen from '../routes/Home/components/Home';

const RootStackNavigator = createStackNavigator({
  Login:{
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(RootStackNavigator);
