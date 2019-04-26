import React from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Button, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors, Config } from '../../../constants/index';
import styles from './photovideoStyles';
import { FlatGrid } from 'react-native-super-grid';

class Photovideo extends React.Component{
  render(){
    const items = [
      { name: 'TURQUOISE', code: '#1abc9c', image: 'https://i.imgur.com/jC7SsI8.jpg' },
      { name: 'TURQUOISE', code: '#1abc9c', image: 'https://i.imgur.com/Vl05Mzr.jpg' },
      { name: 'TURQUOISE', code: '#1abc9c', image: 'https://i.imgur.com/6KVxdQJ.jpg' },
      { name: 'TURQUOISE', code: '#1abc9c', image: 'https://i.imgur.com/gEEt0YL.jpg' },
      { name: 'TURQUOISE', code: '#1abc9c', image: 'https://i.imgur.com/0bxBPbV.jpg' },
      { name: 'TURQUOISE', code: '#1abc9c', image: 'https://i.imgur.com/ZREwB8y.jpg' },
      { name: 'TURQUOISE', code: '#1abc9c', image: 'https://i.imgur.com/L8rJaNV.jpg' },
      { name: 'TURQUOISE', code: '#1abc9c', image: 'https://i.imgur.com/otRx8N1.jpg' },
    ];
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
          <View>
            <Text style={styles.textPhoto}>Gallery</Text>
          </View>
          <View>
            <FlatGrid
              itemDimension={130}
              items={items}
              style={styles.gridView}
              renderItem={({ item, index }) => (
                <View style={[styles.itemContainer]}>
                  <Thumbnail source={{uri : item.image}} style={{width: 150, height: 150}}/>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemCode}>{item.code}</Text>
                </View>
              )}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default Photovideo;
