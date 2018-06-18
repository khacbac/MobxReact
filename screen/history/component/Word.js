import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

class Word extends Component {

    memorizedWord() {
        this.props.dispatch({
            type: 'TOGGLE_MEMORIZED',
            id: this.props.myWord.id
        })
    }

    showWord() {
        this.props.dispatch({
            type: 'TOGGLE_SHOW',
            id: this.props.myWord.id
        })
    }

    render() {
        const { en, vn, memorized, isShow } = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const memorizedBtnText = memorized ? 'forget' : 'memorized';
        const showBtnText = isShow ? 'hide' : 'show';
        const showText = isShow ? vn : '-----------';
        return (
            <View style={styles.container}>
                <Text style={{ textDecorationLine: textDecorationLine, color: 'black', fontSize: 18 }}>{en}</Text>
                <Text style={{ color: 'grey', fontSize: 16 }}>{showText}</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: 5
                }}>
                    <TouchableOpacity
                        style={{
                            borderColor: 'black',
                            borderWidth: 1,
                            padding: 5
                        }}
                        onPress={() => {
                            this.memorizedWord()
                        }}>
                        <Text style={{ fontSize: 12 }}>{memorizedBtnText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            borderColor: 'black',
                            borderWidth: 1,
                            padding: 5
                        }}
                        onPress={() => {
                            this.showWord()
                        }}>
                        <Text style={{ fontSize: 12 }}>{showBtnText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default connect()(Word);


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d2def6',
        padding: 10,
        margin: 10,
    },
});