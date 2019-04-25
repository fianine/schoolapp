import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-native-router-flux';
import scenes from '../routes/scenes';
import { Provider } from 'react-redux';
import Navigation from '../navigations/RootNavigation';
import SplashScreen from 'react-native-smart-splash-screen';

export default class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  componentDidMount(){
     SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500,
     })
  }

  render(){
    return (
      <Provider store={this.props.store}>
        <Navigation />
      </Provider>
    );
  }
}
