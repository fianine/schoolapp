import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Header, List, ListItem, Left, Body, Right, Thumbnail, Footer, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors, Config } from '../../../constants/index';
import styles from './messageStyles';
import { GiftedChat } from "react-native-gifted-chat";

class MessageDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      message: []
    }
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any"
          }
        }
      ]
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
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
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
      </Container>
    );
  }
}

export default MessageDetail;
