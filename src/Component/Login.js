import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import Button from './Button';

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
	<Button buttonText = { this.state.buttonText } 
                clickEvent= { this.buttonPressed } />	    
      </View>
    );
  }

  componentDidMount() {
    console.log('Done mounting!')
  }
}
