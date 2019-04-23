import React from 'react';
import { Text } from 'react-native';
import { Footer, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

export const FooterComponent = () => {

  const tabs = [{
    title: 'Beranda',
    subTitle: '',
    icon: 'home'
  },{
    title: 'Pesan',
    subTitle: '',
    icon: 'envelope'
  },{
    title: 'Profil',
    subTitle: '',
    icon: 'user'
  },{
    title: 'Lainnya',
    subTitle: '',
    icon: 'th'
  }];

  return (
    <Footer>
      <FooterTab style={styles.footerContainer}>
        {
          tabs.map((obj, index) => {
            return (
              <Button key={index}>
                <Icon size={20} name={obj.icon} color={(index === 0) ? "#00BCC3" : "grey"} />
                <Text style={{fontSize: 12, color: (index === 0) ? "#00BCC3" : "grey"}}>{obj.title}</Text>
                <Text style={styles.subText}>{obj.subTitle}</Text>
              </Button>
            )
          })
        }
      </FooterTab>
    </Footer>
  );
}

export default FooterComponent;
