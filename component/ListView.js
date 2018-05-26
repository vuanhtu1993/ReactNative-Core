import React from 'react';
import {FlatList, Text, View, StyleSheet, SectionList} from "react-native";


export default class ListViewDemo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:18, color:'red'}}>Flat List Item</Text>
        <FlatListBasic/>
        <Text style={{fontSize:18, color:'red'}}>Section List Item</Text>
        <SectionListBasic/>
      </View>
    );
  }
}

const FlatListBasic = () => {
  return (
    <FlatList
      data={[
      {key: 'Devin'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'},
    ]}
      renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
    />
  );
};

const SectionListBasic = () => {
  return (
    <SectionList
      sections={[
        {title: 'C', role: 'Admin', data: ['Devin']},
        {title: 'A', role: 'Users', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
      ]}
      renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.role}</Text>}
      keyExtractor={(item, index) => index}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 4,
    paddingLeft: 10,
    fontSize: 16,
  },
  sectionHeader: {
    color: 'steelblue',
    fontSize: 16,
  }
});