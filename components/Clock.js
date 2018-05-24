import React, {Component} from 'react';
import {Button, Text, TextInput, View, StyleSheet, Image} from "react-native";

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
        <ClockReal/>
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

const ClockReal = () => {
  return (
    <View style={styles.clock}>
      <Image style={{height: 200, width: 200}}
             source={{uri: 'https://i.pinimg.com/originals/70/1f/dd/701fdd0228fd4e9ef9877be8dabcb5ca.png'}}/>
      <Image style={styles.sec} source={{uri: 'https://css-tricks.com/examples/CSS3Clock/images/sechand.png'}}/>
      <Image style={styles.min} source={{uri: 'https://css-tricks.com/examples/CSS3Clock/images/minhand.png'}}/>
      <Image style={styles.hour} source={{uri: 'https://css-tricks.com/examples/CSS3Clock/images/hourhand.png'}}/>
    </View>
  );
};

const styles = StyleSheet.create({
    clock: {
      position: 'relative',
      width: 600,
      height: 600,
      margin: 20,
    },
    sec: {
      position: "absolute",
      width: 10,
      height: 100,
      top: 30,
      left: 285,
      zIndex: 3,
    },
    min: {
      position: "absolute",
      width: 10,
      height: 100,
      top: 30,
      left: 285,
      zIndex: 2,
    },
    hour: {
      position: "absolute",
      width: 10,
      height: 100,
      top: 30,
      left: 285,
      zIndex: 1,
    }
  })
;