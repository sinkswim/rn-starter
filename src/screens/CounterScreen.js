import React, { useReducer } from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

const reducer = (state, action) => {
    switch(action.type) {
        case 'change_counter':
            return {...state, counter: state.counter+action.payload}
        default:
            return state;
    }
};

// useState hook is ideal here but as an exercise I changed it using the useReducer hook
const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0}); 
    // ^ array destructuring
    const counter = state.counter;

    return (<View>
        <Button title='Increase' onPress={() => {
            dispatch({type: 'change_counter', payload: 1});
        }}/>
        <Button title='Decrease' onPress={() => {
            dispatch({type: 'change_counter', payload: -1});
        }}/>
        <Text>Current count: {counter}</Text>
    </View>
    );

};

const style = StyleSheet.create({});

export default CounterScreen;