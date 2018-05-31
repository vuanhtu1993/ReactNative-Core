import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet} from "react-native";

export default class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
      todos: [{ id: 1, name: "monday", done: false }, { id: 2, name: "tuesday", done: false }],
    }
  }
  renderItem = ({item}) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  };
  render() {
    const extractKey = ({id}) => id;
    return (
      <View style={styles.container}>
        <Text>Todo application</Text>
        <FlatList
          style = {styles.container}
          data = {this.state.todos}
          renderItem={({item}) => <Text style={styles.row}>{item.name}</Text>}
          keyExtractor={extractKey}
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