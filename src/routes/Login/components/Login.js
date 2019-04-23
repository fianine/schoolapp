import React from 'react';
import { View, Text, Image } from 'react-native';
import { Container, Footer, FooterTab, Item, Input, Button } from 'native-base';
import { Colors, Config, Layout } from '../../../constants/index';
import styles from './loginStyles';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <Container>
        <View style={styles.container}>
          <View>
            <Image source={Config.LOGOMEDIUMBLACK} style={styles.logoLogin} />
          </View>
          <View style={styles.separator}/>
          <View style={{width: Layout.width-20, marginTop: 10, paddingHorizontal: 20 }}>
            <Item style={{borderColor: Colors.primary}}>
               <Input keyboardType="email-address" onChangeText={(val) => this.setState({email: val})} placeholder="Email" />
             </Item>
          </View>
          <View style={{width: Layout.width-20, marginTop: 10, paddingHorizontal: 20 }}>
            <Item style={{borderColor: Colors.primary}}>
               <Input secureTextEntry={true} onChangeText={(val) => this.setState({password: val})} placeholder="Password" />
             </Item>
          </View>
        </View>
        <Footer>
          <FooterTab>
            <Button style={{backgroundColor: Colors.primary}} full onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={{color:Colors.white}}>LOGIN</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Login;
