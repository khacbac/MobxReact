import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const items = [
    {
        screen: "Login",
        item: "Màn hình Login"
    },
    {
        screen: "Home",
        item: "Màn hình Home"
    },
    {
        screen: "History",
        item: "Màn hình History"
    },
    {
        screen: "News",
        item: "Màn hình News"
    },
    {
        screen: "About",
        item: "Màn hình About"
    }
]



export default class ContentDrawer extends Component {
    render() {
        return (
            <View style={styles.container}>
                {items.map(item => {
                    return (
                        <TouchableOpacity
                            key={item.screen}
                            onPress={() => {
                                this.props.navigation.closeDrawer()
                                this.props.navigation.navigate(item.screen);
                            }}>
                            <Text style={{ paddingVertical: 15, paddingHorizontal: 10 }}>{item.item}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});