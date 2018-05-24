import React, { Component } from 'react';
import {Button, Text, TextInput, View} from "react-native";

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      duration: 0,
      inputTime: '',
    }
  }
  handleInput = (text) => {
    this.setState({
      inputTime: text,
    });
  };
  handleButton = () => {
    if (!this.state.inputTime) {
      alert('Fill in the time to count down');
      return;
    }
    clearInterval(this.timeID);
    let futureTime = new Date(this.state.inputTime).getTime();
    this.timeID = setInterval(() => {
      this.setState({
        duration: futureTime - (new Date().getTime()),
      });
    }, 1000)
  };
  render() {
    let duration = this.state.duration;
    return (
      <View>
        <Text>Welcome to countdown app</Text>
        <TextInput
          onChangeText={this.handleInput}
          placeholder="Fill the time to count down"
          value=""
        />
        <Button
          onPress={this.handleButton}
          title="Count down"
        />
        <ClockDisplay duration={duration}/>
      </View>
    );
  }
}

const ClockDisplay = ({duration}) => {
  return (
    <View>
      <Text>Days:{Math.floor(duration / (1000 * 60 * 60 * 24))}</Text>
      <Text>Hours:{Math.floor(duration % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))}</Text>
      <Text>Minutes:{Math.floor(duration % (1000 * 60 * 60) / (1000 * 60))}</Text>
      <Text>Seconds:{Math.floor(duration % (1000 * 60) / 1000)}</Text>
    </View>
  );
};