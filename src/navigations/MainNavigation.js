import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../constants/index';

import HomeScreen from '../routes/Home/components/Home';
import PartnershipScreen from '../routes/Partnership/components/Partnership';
import CalendarScreen from '../routes/Calendar/components/Calendar';
import PhotovideoScreen from '../routes/Photovideo/components/Photovideo';

const RootStackNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Partnership: {
    screen: PartnershipScreen,
    navigationOptions: {
      header: null
    }
  },
  Photo: {
    screen: PhotovideoScreen,
    navigationOptions: {
      header: null
    }
  },
  Calendar: {
    screen: CalendarScreen,
    navigationOptions: {
      header: null
    }
  }
},{
  initialRouteName: 'Home',
  barStyle:{
    backgroundColor: '#FFF'
  },
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if(routeName === 'Home'){
        iconName = 'home';
      }else if (routeName === 'Partnership'){
        iconName = 'user';
      }else if (routeName === 'Photo'){
        iconName = 'image';
      }else if (routeName === 'Calendar'){
        iconName = 'calendar';
      }
      return <Icon containerStyle={{ marginBottom: 10}} style={{ color: focused ? Colors.primary : '#aeaeae', marginBottom: 10}} name={iconName} size={30} color={tintColor} />
    },
  }),
  animationEnabled: false,
  tabBarOptions: {
    style: {
      backgroundColor: '#FFF',
      paddingTop: 10,
      borderTopWidth: 0.5,
      borderTopColor: '#d6d6d6',
      color: Colors.primary
    },
    activeTintColor: Colors.primary,
    inactiveTintColor: 'grey',
  }
});

export default createAppContainer(RootStackNavigator);
