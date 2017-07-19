/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TextComponent from './application/components/Text';
import CounterComponent from './application/components/Counter';
import InitRouter from './application/components/InitRouter';

export default class app extends Component {
  render() {
    return (
      <InitRouter />
      /*<View style={STYLES.view}>
      <TextComponent myText="Olá, meu Nome é Cristian"></TextComponent>
      <CounterComponent></CounterComponent>
      </View>*/
    );
  }
}

const STYLES = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('app', () => app);
