import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend 1', age: '20'},
        {name: 'Friend 2', age: '30'},
        {name: 'Friend 3', age: '19'},
        {name: 'Friend 4', age: '62'},
        {name: 'Friend 5', age: '35'},
        {name: 'Friend 6', age: '22'},
        {name: 'Friend 7', age: '45'},
        {name: 'Friend 8', age: '25'},
    ];

    return (
        <FlatList 
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({ item }) => {   // item comes from element.item
                return <Text style={style.textStyle}>{item.name} - Age {item.age}</Text>
            } }/> 
    );
};

const style = StyleSheet.create({
    textStyle: {
        marginVertical: 10,
        // borderBlockColor: 'black',
       // borderColor: 'black'
    }
});

export default ListScreen;