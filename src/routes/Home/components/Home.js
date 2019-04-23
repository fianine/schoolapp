import React from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Content, Card, CardItem, Body } from 'native-base';
import HeaderComponent from '../../../components/HeaderComponent/index';
import FooterComponent from '../../../components/FooterComponent/index';
import { Config } from '../../../constants/index';
import styles from './homeStyles';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <Container>
        <HeaderComponent logo={Config.LOGOMEDIUMWHITE}/>
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
        <FooterComponent />
      </Container>
    );
  }
}

export default Home;
