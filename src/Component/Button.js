import React, { Component } from 'react';
import { 
  Text, 
  TouchableHighlight 
} from 'react-native';
import styles from './styles';

const Button = ({clickEvent, buttonText}) => {
    return (
      <TouchableHighlight style = {styles.button} 
        onPress={clickEvent}>
        <Text style= { styles.buttonText } >{buttonText}</Text>
      </TouchableHighlight>
    )
  }
export default Button
