import React from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Button, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors, Config } from '../../../constants/index';
import styles from './partnerStyles';
import { FlatGrid } from 'react-native-super-grid';

class Partnership extends React.Component{
  render(){
    const items = [
      { name: 'Parenting', image: 'https://i.imgur.com/OSpshdJ.jpg' },
      { name: 'Bahasa Kasih', image: 'https://i.imgur.com/EsXKPnD.jpg' },
      { name: 'Nafiri Kids', image: 'https://i.imgur.com/04f5zVM.jpg' },
      { name: 'Education 4.0', image: 'https://i.imgur.com/BM1VAjT.jpg' }
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
            <Text style={styles.textPartner}>Partnership</Text>
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
                </View>
              )}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default Partnership;
