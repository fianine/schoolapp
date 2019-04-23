import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import LoginContainer from './Login/containers/LoginContainer';

const scenes = Actions.create(
  <Scene key="root" hideNavBar>
    <Scene key="Login" component={LoginContainer} title="Login" initial />
  </Scene>
);

export default scenes;
