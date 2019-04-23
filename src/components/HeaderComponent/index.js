import React from 'react';
import { Text, Image } from 'react-native';
import { Header, Left, Body, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

export const HeaderComponent = ({logo}) => {
  return (
    <Header style={{backgroundColor: '#00BCC3'}} androidStatusBarColor="#00BCC3">
      <Left>
        <Image source={logo} resizeMode="contain" style={styles.logo} />
      </Left>
      <Body />
      <Right>
        <Button transparent>
          <Icon name="comments" style={styles.icon} />
        </Button>
      </Right>
    </Header>
  );
}

export default HeaderComponent;
