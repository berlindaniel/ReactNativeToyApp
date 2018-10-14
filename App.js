import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Image,
  ImageBackground
} from 'react-native';

import FetchClasses from './components/FetchClasses';
import FetchHome from './components/FetchHome';

export default class App extends React.Component {
  constructor(){
        super();
        this.state = {
            textValue:'Welcome Daniel!'
        }
    }

  getClassesHandler = () => {
      this.setState({
            textValue: "Your classes are: Math, Physics, Biology, Computer Graphics"
          })
  }

  getHome = () => {
      this.setState({
            textValue: "Welcome Daniel!"
          })
  }

  render() {
    return (
      <ImageBackground source={require('./schoolPic.jpg')} style={styles.container}>
        <FetchClasses onGetClasses={this.getClassesHandler} />
        <Text>{this.state.textValue}</Text>
        <FetchHome onGetHome={this.getHome} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
