import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View, Alert, Button, TouchableHighlight} from 'react-native';

export default class FlexDimension extends Component{
  render() {
    return (
      <View style={styles.flexParent}>
        <View style={{ height: 100, backgroundColor: 'powderblue' }}/>
        <View style={{ height: 100, backgroundColor: 'skyblue' }}/>
        <View style={{ height: 100, backgroundColor: 'steelblue' }}/>
        <View style={{ height: 100, backgroundColor: 'powderblue' }}/>
        <View style={{ height: 100, backgroundColor: 'skyblue' }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexParent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  }
});