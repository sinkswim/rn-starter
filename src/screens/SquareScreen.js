import React, {useReducer} from "react";
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from "../../components/ColorCounter";

const COLOR_INCREMENT = 20;

const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number}
    // action === {colorToChange: 'red' || 'green' || 'blue', amount: COLOR_INCREMENT || -COLOR_INCREMENT}
    switch(action.colorToChange){
        case 'red':
            return state.red + action.amount > 255 ||state.red + action.amount < 0
                ? state // always return something from the reducer or the state will be undefined on next page render
                : {...state, red: state.red+action.amount};    // not changing the state object directly, rather creating a new object
        case 'green':
            return state.green + action.amount > 255 ||state.green + action.amount < 0
            ? state 
            : {...state, green: state.green+action.amount}; 
        case 'blue':
            return state.blue + action.amount > 255 ||state.blue + action.amount < 0
            ? state 
            : {...state, blue: state.blue+action.amount}; 
        default:
            return;
    }
};

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state;   // destructure to use then at backgroundColor
    console.log(state);

    return (
        <View>
            <ColorCounter 
                onIncrease={() => {dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})}} 
                onDecrease={() => {dispatch({colorToChange: 'red', amount: -COLOR_INCREMENT})}}
                color='Red'/>
            <ColorCounter 
                onIncrease={() => {dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})}} 
                onDecrease={() => {dispatch({colorToChange: 'green', amount: -COLOR_INCREMENT})}}
                color='Green'/>
            <ColorCounter 
                onIncrease={() => {dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})}} 
                onDecrease={() => {dispatch({colorToChange: 'blue', amount: -COLOR_INCREMENT})}}
                color='Blue'/>
            <View 
                style={ 
                    {height: 100, 
                    width: 100, 
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`} }></View>
        </View>
)};

const style = StyleSheet.create({});

export default SquareScreen;