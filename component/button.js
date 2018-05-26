import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View, Alert, Button, TouchableHighlight} from 'react-native';

export default class ButtonDemo extends Component{
  render() {
    return (
      <View style={styles.flexParent}>
        <Button
          title="Click me"
          style={{
            padding: 100,
          }}
          onPress={() => alert('xxx')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexParent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});