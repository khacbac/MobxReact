import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

class AddItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            en: '',
            vn: ''
        }
    }

    onAdd() {
        const { en, vn } = this.state;
        this.props.dispatch({
            type: "ADD_WORD",
            en: this.state.en,
            vn: this.state.vn
        });
        this.setState({
            en: '',
            vn: ''
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginRight: 20 }}>EN:</Text>
                    <TextInput
                        placeholder="Nhập từ tiếng anh"
                        style={{ flex: 1 }}
                        value={this.state.en}
                        onChangeText={(text) => { this.setState({ en: text }) }}
                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginRight: 20 }}>VN:</Text>
                    <TextInput
                        placeholder="Nhập từ tiếng việt"
                        style={{ flex: 1 }}
                        value={this.state.vn}
                        onChangeText={(text) => { this.setState({ vn: text }) }} />
                </View>
                <TouchableOpacity
                    style={{ alignItems: 'center' }}
                    onPress={() => {
                        this.onAdd();
                    }}
                >
                    <Text style={{ fontSize: 20, color: 'red' }}>ADD</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect()(AddItem);


const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});