import React, { Component } from 'react';
import {
StyleSheet,
View,
Text
} from 'react-native';


export default class NewsScreen extends Component {
    render() {
        return (
      <View style={styles.container}>
            <Text>News Screen</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});