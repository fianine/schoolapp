import React from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Header, Left, Right, Content, Card, CardItem, Body, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors, Config } from '../../../constants/index';
import styles from './homeStyles';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <Container>
        <Header style={{backgroundColor: Colors.primary}} androidStatusBarColor={Colors.primary}>
          <Left style={{flex: 1}} />
          <Body>
            <Image source={Config.LOGOMEDIUMWHITE} resizeMode="contain" style={styles.logo} />
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate('Message')}>
              <Icon name="comments" style={styles.icon} />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <View>
            <Text style={styles.textAnnounce}>Announcements</Text>
          </View>
          <Card>
            <CardItem header bordered>
              <Text>Announcement 1</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>23 April 2019</Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text>Announcement 2</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>23 April 2019</Text>
            </CardItem>
          </Card>

          <Card>
            <CardItem header bordered>
              <Text>Announcement 3</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>23 April 2019</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Home;
