import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../../../constants/index';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  notificationBox: {
    borderRadius:10,
    backgroundColor: Colors.white,
    marginHorizontal: 10,
    paddingBottom: 30,
  },
  logoLogin: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    alignItems: 'center',
  },
  viewForm: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  viewFormSecond: {
    width: Layout.width,
    paddingLeft: 40,
    paddingRight: 40
  },
  cardLogin: {
    borderRadius: 10
  },
  textLogin: {
    marginTop: 2
  },
  textRegist: {
    marginTop: 10,
    textAlign: 'center',
    color: Colors.white,
  },
  textButtonLogin: {
    color: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default styles;
