import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View, Alert, Button, TouchableHighlight} from 'react-native';
import FlexDimension from "./component/flexDimension";
import TextInputDemo from "./component/textInput";

export default class App extends Component {
  render() {
    return (
      <TextInputDemo/>
    );
  }
}