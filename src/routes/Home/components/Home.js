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
                  Perayaan HUT RI ke 71 di Nafiri Study Center. Anak-anak diajarkan untuk mencintai dan menghidupi semangat Nasionalisme dengan berbagai aktivitas, yakni Upacara Bendera, membuat berbagai macam kreativitas Bendera Merah Putih, Lomba, hingga Pawai Kemerdekaan. Kegiatan ini diikuti oleh siswa dan siswi mulai umur 2 tahun hingga 16 tahun.
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
                  Nafiri Kids School mengadakan tes Finger's Print, Kamis, 27 November 2014
                </Text>
                <Text>
                  Pukul 08.00-13.00 ( disesuaikan dengan jam belajar )
                </Text>
                <Text>
                  Paket I : untuk mengetahui gaya belajar anak dan Multiple Intelligent
                </Text>
                <Text>
                  Paket II : untuk mengetahui gaya belajar, Multiple Intelligent, otak kiri/kanan, motivasi, karakter, gaya kerja, respon stress
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
                  Fun Day anak Primary, Secondary, dan High School ke Monumen Nasional. Jumat, 26 Agustus 2016.
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
