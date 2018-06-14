import React, { Component } from 'react';
import {
StyleSheet,
View,
Text
} from 'react-native';


export default class AboutScreen extends Component {
    render() {
        return (
      <View style={styles.container}>
            <Text>About Screen</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});