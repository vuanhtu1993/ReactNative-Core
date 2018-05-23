import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View} from 'react-native';

export default class FixedDimensionsBasics extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    }
  }
  handleInput = (text) => {
    this.setState({
      text
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Greeting/>
        <Text style={{fontSize: 18, marginTop: 10}}>FLex practice</Text>
        <View style={styles.flex}>
          <View style={{height: 50, width: 50, backgroundColor: 'powderblue'}} ><Text>1</Text></View>
          <View style={{height: 50, width: 50, backgroundColor: 'skyblue'}} ><Text>2</Text></View>
          <View style={{height: 50, width: 50, backgroundColor: 'steelblue'}} ><Text>3</Text></View>
        </View>
        <Text style={{fontSize: 18}}>Input practice</Text>
        <TextInput
          placeholder="Plz fill in the word to translate"
          style={{height: 20, fontSize: 16}}
          value={this.state.text}
          onChangeText={(text) => this.handleInput(text)}
        />
        <Text>
          { this.state.text.split(' ').map((word) => word && '🍕').join(' ') }
        </Text>
      </View>
    );
  }
}
const Greeting = () => {
  return (
    <View>
      <Text style={{fontSize: 25, color: 'gray'}}>Welcome to react native app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
    width: 380,
    marginTop: 50,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    alignItems: 'center',
  }
})