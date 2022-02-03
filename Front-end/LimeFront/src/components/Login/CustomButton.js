// CustomButton
import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Impact from '../assets/fonts/Impact.ttf';
import Hangul from '../assets/fonts/BinggraeMelona.otf';

export default class CustomButton extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <TouchableOpacity style={[
        styles.button,
        {backgroundColor: this.props.buttonColor}
      ]}
      onPress={this.props.onPress}>
        <Text style={[
          styles.title,
          {color: this.props.titleColor}
        ]}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontFamily: './assets/fonts/Impact.ttf',
    fontStyle: 'italic',
    letterSpacing: 0
  }
});