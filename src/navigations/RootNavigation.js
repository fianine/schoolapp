import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import LoginScreen from '../routes/Login/components/Login';
import MainScreen from './MainNavigation';
import MessageScreen from '../routes/Message/components/Message';
import MessageDetailScreen from '../routes/Message/components/MessageDetail';

const RootStackNavigator = createStackNavigator({
  Login:{
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Main: {
    screen: MainScreen,
    navigationOptions: {
      header: null
    }
  },
  Message: {
    screen: MessageScreen,
    navigationOptions: {
      header: null
    }
  },
  MessageDetail: {
    screen: MessageDetailScreen,
    navigationOptions: {
      header: null
    }
  }
},{
  initialRouteName: 'Login'
});

export default createAppContainer(RootStackNavigator);
