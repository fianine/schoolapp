import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Header, List, ListItem, Left, Body, Right, Thumbnail, Footer, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors, Config } from '../../../constants/index';
import styles from './messageStyles';
import Ripple from 'react-native-material-ripple';

class Message extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <Container>
        <Header style={{backgroundColor: Colors.primary}} androidStatusBarColor={Colors.primary}>
          <Left style={{flex: 1}}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-left" style={styles.icon} />
            </Button>
          </Left>
          <Body style={styles.body}>
            <Image source={Config.LOGOMEDIUMWHITE} resizeMode="contain" style={styles.logo} />
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate('Message')}>
              <Icon name="comments" style={styles.icon} />
            </Button>
          </Right>
        </Header>
        <Content>
          <Ripple onPress={() => this.props.navigation.navigate('MessageDetail')}>
            <List>
              <ListItem avatar>
                <Left>
                  <Image source={{ uri: 'https://i.imgur.com/LvKebGL.png' }} />
                </Left>
                <Body>
                  <Text>Susi Wahyuni</Text>
                  <Text note>Apa kabar ?</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            </List>
          </Ripple>
          <Ripple onPress={() => this.props.navigation.navigate('MessageDetail')}>
            <List>
              <ListItem avatar>
                <Left>
                  <Image source={{ uri: 'https://i.imgur.com/LvKebGL.png' }} />
                </Left>
                <Body>
                  <Text>Budi Utomo</Text>
                  <Text note>Apa kabar ?</Text>
                </Body>
                <Right>
                  <Text note>3:43 pm</Text>
                </Right>
              </ListItem>
            </List>
          </Ripple>
        </Content>
      </Container>
    );
  }
}

export default Message;
