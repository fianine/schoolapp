import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Root from './src/main';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Root {...this.props} />
    );
  }
}
