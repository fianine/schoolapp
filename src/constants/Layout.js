import { Dimensions } from 'react-native';

const{ width, height } = Dimensions.get('window');

export default {
  width: width,
  isSmallDevice: width < 375,
};
