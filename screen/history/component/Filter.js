import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

class Filter extends Component {

    getTextStyle = (statusName) => {
        const { filterStatus } = this.props;
        if (statusName === filterStatus) {
            return { color: 'yellow', fontWeight: 'bold' };
        }
        return styles.txtButton;
    }

    setFilterStatus(action_type) {
        this.props.dispatch({
            type: action_type
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    this.setFilterStatus('FILTER_SHOWALL')
                }}>
                    <Text style={this.getTextStyle('SHOW_ALL')}>SHOW ALL</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    this.setFilterStatus('FILTER_MEMORIZED')
                }}>
                    <Text style={this.getTextStyle('MEMORIZED')}>MEMORIZED</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    this.setFilterStatus('FILTER_NEED_PRACTICE')
                }}>
                    <Text style={this.getTextStyle('NEED_PRACTICE')}>NEED PRACTICE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

mapStateToProps = (state) => {
    return {
        filterStatus: state.filterStatus
    }
}

export default connect(mapStateToProps)(Filter);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "brown",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    txtButton: {
        color: 'white',
        fontWeight: 'normal'
    }
});