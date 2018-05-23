import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://efc.edu.vn/wp-content/uploads/2017/12/AAEAAQAAAAAAAAntAAAAJDUxZjY4NWJiLTY2MTctNDYwZC04ZWE2LTU3NzhkODJkOTMxZA.jpg'
    };
    return (
      <View style={styles.container}>
        <Greeting name="AnhTus"/>
        <Image source={pic} style={{width: 250, height: 200}}/>
      </View>
    );
  }
}

class Greeting extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.greeting}>Hello {this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  greeting: {
    fontSize: 20,
  }
});
