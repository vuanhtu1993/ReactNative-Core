import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Alert, Button, TouchableHighlight, Switch,
  TouchableOpacity
} from 'react-native';


export default class FlexDimension extends Component{
  constructor() {
    super();
    this.state = {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }
  }
  render() {
    const {flexDirection, justifyContent, alignItems} = this.state;
    let primaryAxis = flexDirection;
    let secondaryAxis = (primaryAxis === "row") ? "column" : "row";
    return (
      <View style={styles.container}>
        <Toggle
          label={'Primary axis (flexDirection)'}
          value={flexDirection}
          options={['row', 'column']}
          onChange={(option) => this.setState({flexDirection: option})}
        />
        <Toggle
          label={'PrimaryAxis ' + primaryAxis + ' distribution (justifyContent)'}
          value={justifyContent}
          options={['flex-start', 'center', 'flex-end', 'space-around', 'space-between']}
          onChange={(option) => this.setState({justifyContent: option})}
        />
        <Toggle
          label={'SecondaryAxis ' + secondaryAxis + ' alignment (alignItems)'}
          value={alignItems}
          options={['flex-start', 'center', 'flex-end', 'stretch']}
          onChange={(option) => this.setState({alignItems: option})}
        />
        <View style={[styles.container, this.state]}>
          <View style={{ padding: 25, margin: 5, backgroundColor: 'powderblue' }}/>
          <View style={{ padding: 25, margin: 5, backgroundColor: 'skyblue' }}/>
          <View style={{ padding: 25, margin: 5, backgroundColor: 'steelblue' }}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 10,
    flex: 1,
  }
});

class Toggle extends Component {

  onPress = (option) => {
    const {onChange} = this.props;

    onChange(option)
  };

  renderOption = (option) => {
    const {value} = this.props;

    return (
      <TouchableOpacity
        style={[stylesToggle.option, option === value && stylesToggle.activeOption]}
        onPress={this.onPress.bind(this, option)}
      >
        <Text style={stylesToggle.text}>
          {option}
        </Text>
      </TouchableOpacity>
    )
  };

  render() {
    const {label, options} = this.props;

    return (
      <View style={stylesToggle.container}>
        <Text style={[stylesToggle.text, stylesToggle.label]}>
          {label}
        </Text>
        <View style={stylesToggle.optionsContainer}>
          {options.map(this.renderOption)}
        </View>
      </View>
    )
  }
}

const stylesToggle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingBottom: 20,
  },
  text: {
    fontSize: 14,
  },
  label: {
    padding: 4,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  option: {
    padding: 4,
    backgroundColor: 'whitesmoke',
  },
  activeOption: {
    backgroundColor: 'skyblue',
  },
});
