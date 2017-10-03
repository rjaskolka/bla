import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './styles';

export default class MyApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Another line to check live updates</Text>
        <Text>Bubla is here</Text>
      <TouchableHighlight style={styles.button} >
      <Text>Press to login</Text>
	</TouchableHighlight>
      </View>
    );
  }
}
