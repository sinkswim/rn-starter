import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Hello this is my greeting';
    const arrayGreeting = [123, 456];
    const objectGreeting = {color: 'red'}
    const jsxGreeting = <Text>This is JSX const element</Text>
    const emptyLine = '\n';
    const myName = 'Robert';

    return (
    <View>
        <Text style={styles.textStyle}>This is the components screen</Text>
        <Text>{greeting}</Text>
        <Text>{arrayGreeting[1]}</Text>
        <Text>{objectGreeting.color}</Text>
        <Text>{emptyLine}</Text>
        {jsxGreeting}
        <Text style={styles.myNameStyle}>My name is {myName}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    myNameStyle: {
        color: 'red',
    }
});

export default ComponentsScreen;