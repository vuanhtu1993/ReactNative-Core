import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import Clock from "./components/Clock";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Clock/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
  }
});