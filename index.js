import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = { value: 10 };

const reducer = (state = defaultState, action) => {
    if (action.type === 'UP') return { value: state.value + 1 };
    if (action.type === 'DOWN') return { value: state.value - 1 };
    return state;
}

const store = createStore(reducer);

export default class ReduxDemo extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('MobXReact', () => ReduxDemo);
