import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View, Alert, Button, TouchableHighlight} from 'react-native';

export default class FlexDimension extends Component{
  constructor() {
    super();
    this.state = {
      inputText: "",
    }
  }
  render() {
    const text = this.state.inputText;
    return (
      <View style={styles.flexParent}>
        <View>
          <Text>Hello</Text>
          <TextInput
            style={{height:50}}
            placeholder="Convert pizza"
            onChangeText={ (text) => this.setState({ inputText: text }) }
          />
          <Text>{text.split(' ').map((word, index) => word && <Box key={index} />)}</Text>
        </View>
      </View>
    );
  }
}

const Box = () => {
  return (
    <View style={{ height: 50, width: 50, backgroundColor: 'powderblue' }}/>
  );
};

const styles = StyleSheet.create({
  flexParent: {
    padding: 20,
    marginTop: 50,
    flex: 1,
  }
});