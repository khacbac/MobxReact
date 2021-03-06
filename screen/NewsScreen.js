import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Controller from './Controller';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <View style={styleApp.container}>
        <View style={styleApp.header}>
          <Text style={styleApp.appName}>APP COMPONENT</Text>
          <Text style={[{ color: this.props.color }, styleApp.value]}>{this.props.myValue}</Text>
        </View>
        <Controller />
      </View>
    );
  }
}

mapStateToProps = (state) => {
  return {
    myValue: state.value,
    color: state.color
  }
}

export default connect(mapStateToProps)(App);

const styleApp = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingTop: 30
  },
  header: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  appName: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
  value: {
    fontSize: 40
  }
});