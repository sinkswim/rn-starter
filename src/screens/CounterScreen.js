import React, { useState } from "react";
import {View, Text, Button, StyleSheet} from 'react-native';

const CounterScreen = () => {
   const [counter, setCounter] = useState(0); // vs. let counter = 0; which would not work i.e. increase or decrease would work but the new value of the counter would not be renedered
    // ^ array destructuring

    return (<View>
        <Button title='Increase' onPress={() => {
            // this is bad practice which won't render on screen -> counter++
            setCounter(counter+1);
        }}/>
        <Button title='Decrease' onPress={() => {
            // this is bad practice which won't render on screen -> counter--
            setCounter(counter-1);
        }}/>
        <Text>Current count: {counter}</Text>
    </View>
    );

};

const style = StyleSheet.create({});

export default CounterScreen;