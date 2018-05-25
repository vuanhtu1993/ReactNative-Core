import React, {Component} from 'react';
import {
  AppRegistry, StyleSheet, Text, TextInput, View, Alert, Button, TouchableHighlight,
  TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, ScrollView, Keyboard
} from 'react-native';

export default class TextInputDemo extends Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
    }
  }

  componentDidMount() {
    this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.handleKeyBoardShow);
    this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', this.handleKeyBoardHide)
  }
  handleKeyBoardShow() {
    console.log('Keyboard show');
  }
  handleKeyBoardHide() {
    console.log('Keyboard hide');
  }
  componentWillUnmount() {
    this.keyboardDidShow.remove();
    this.keyboardDidHide.remove();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 14}}>Username</Text>
        <TextInput
          placeholder='Fill-in username'
          style={{
            height: 50,
            padding: 10,
            borderColor: 'orange',
            borderWidth: 1,
            borderRadius: 10,
            color: 'gray',
          }}
          onSubmitEditing={Keyboard.dismiss}
        />
        <Text style={{fontSize: 14}}>Password</Text>
        <TextInput
          placeholder='Should be fill in'
          secureTextEntry={true}
          style={{
            height: 50,
            padding: 10,
            borderColor: 'orange',
            borderWidth: 1,
            borderRadius: 10,
            color: 'gray',
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
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