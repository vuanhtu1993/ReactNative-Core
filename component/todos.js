import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet, TextInput} from "react-native";

export default class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
      todos: [{ id: 1, name: "monday", done: false }, { id: 2, name: "tuesday", done: false }],
    }
  }
  handleSubmitEditing(text) {
    this.setState({
      inputText: text
    })
  }
  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Text>Todo application</Text>
        <TextInput
          placeholder='Adding todos'
          style={{
            margin: 10,
            height: 50,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            color: 'gray',
          }}
          blurOnSubmit={true}
          onSubmitEditing={this.handleSubmitEditing}
          onChangeText={(text) => this.setState({inputText: text})}
        />
        <FlatList
          style = {styles.container}
          data = {this.state.todos}
          renderItem={({item}) => <Text style={styles.row}>{item.name}</Text>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
});