import React, {Component} from 'react';
import {ScrollView, View, StyleSheet} from "react-native";

export default class ScrollViewDemo extends Component {
  render() {
    return(
      <ScrollView style={styles.container}>
        <View style={styles.largeBox}/>
        <ScrollView horizontal>
          <View style={styles.smallBox}/>
          <View style={styles.smallBox}/>
          <View style={styles.smallBox}/>
        </ScrollView>
        <View style={styles.largeBox}/>
        <ScrollView horizontal>
          <View style={styles.smallBox}/>
          <View style={styles.smallBox}/>
          <View style={styles.smallBox}/>
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  largeBox: {
    width: 400,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
  smallBox: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  }
});