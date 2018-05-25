import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet, Text, TextInput, View, Alert, Button, TouchableHighlight,
  TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, ScrollView
} from 'react-native';

export default class FlexDimension extends Component{
  constructor() {
    super();
    this.state = {
      inputText: "",
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{ height: 200, width: 200, backgroundColor: 'powderblue' }}/>
          <View style={{ height: 200, width: 200, backgroundColor: 'gray' }}/>
          <View style={{ height: 200, width: 200, backgroundColor: 'orange' }}/>
          <View style={{ height: 200, width: 200, backgroundColor: 'pink' }}/>
        </View>
      </ScrollView>
    );
  }
}

const Box = () => {
  return (
    <View style={{ height: 200, width: 200, backgroundColor: 'powderblue' }}/>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});