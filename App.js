import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View, Alert, Button, TouchableHighlight} from 'react-native';
import FlexDimension from "./component/flexDimension";
import TextInputDemo from "./component/textInput";
import ButtonDemo from "./component/button";
import ListViewDemo from "./component/ListView";

export default class App extends Component {
  render() {
    return (
      <ListViewDemo/>
    );
  }
}