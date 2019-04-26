import React from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors, Config } from '../../../constants/index';
import styles from './calendarStyles';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

class Calendar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Kegiatan', 'Tanggal'],
      tableData: [
        ['Kegiatan 1', '4 Maret 2019'],
        ['Kegiatan 2', '5 Maret 2019'],
        ['Kegiatan 3', '6 Maret 2019'],
        ['Kegiatan 4', '7 Maret 2019'],
        ['Kegiatan 5', '8 Maret 2019'],
      ]
    }
  }

  render(){
    const state = this.state;
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
            <Text style={styles.textCalendar}>Academic Calendar</Text>
          </View>
          <View style={styles.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#F49F0A'}}>
              <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
              <Rows data={state.tableData} textStyle={styles.text}/>
            </Table>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Calendar;
