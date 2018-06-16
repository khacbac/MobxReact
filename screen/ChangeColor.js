import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { changeColor } from './Action';

import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => {
                this.props.changeColor();
            }}>
                <Text style={{ color: 'red', fontSize: 20 }}>Change color</Text>
            </TouchableOpacity>
        );
    }
}

mapDispatchToProps = (dispatch) => {
    return {
        changeColor: () => dispatch({ type: "CHANGE_COLOR" })
    }
}

export default connect(null, mapDispatchToProps)(App);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});