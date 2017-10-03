import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import styles from './styles';

export default class Login extends Component {
  constructor (props) {
    super(props)
      this.state = {
        loggedIn: false,
        buttonText: 'Press to login'
      }
  }
  componentWillMount() {
    console.log(this.state.loggedIn)
  }

  buttonPressed = () => {
    let currentState = this.state.loggedIn
    console.log('button pressed')
    if(currentState) {
      this.setState({
        loggedIn: !currentState,
        buttonText: 'Press to logout'
      })
    } else {
      this.setState({
        loggedIn: !currentState,
        buttonText: 'Press to login'
      })
    }
  }

  render() {
    return (
      <View style= { styles.container } >
      <TouchableHighlight style= { styles.button } onPress={this.buttonPressed}>
          <Text style= { styles.buttonText } >{ this.state.buttonText}</Text>
	</TouchableHighlight>
      </View>
    );
  }

  componentDidMount() {
    console.log('Done mounting!')
  }
}
