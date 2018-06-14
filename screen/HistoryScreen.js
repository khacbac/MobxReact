import React, { Component } from 'react';
import {
StyleSheet,
View,
Text
} from 'react-native';


export default class HistoryScreen extends Component {
    render() {
        return (
      <View style={styles.container}>
            <Text>History Screen</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});