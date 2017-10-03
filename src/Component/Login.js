import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './styles';

export default class Login extends Component {
  constructor (props) {
    super(props)
      this.state = {
        loggedIn: false
      }
  }
  componentWillMount() {
    console.log(this.state.loggedIn)
  }

  render() {
    return (
      <View style= { styles.container } >
      <TouchableHighlight style= { styles.button } >
          <Text style= { styles.buttonText } >Press to login</Text>
	</TouchableHighlight>
      </View>
    );
  }

  componentDidMount() {
    console.log('Done mounting!')
  }
}
