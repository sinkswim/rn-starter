import React from "react";
import { Button, Text, StyleSheet, TouchableOpacity, View } from "react-native";

const HomeScreen = ( {navigation} ) => {  //navigation is a destructured prop

  return (
    <View>

      <Text style={styles.text}>Homepage</Text>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Components')} 
        style={styles.button}>
        <Text style={styles.text}>Go to ComponentsScreen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('List')}
        style={styles.button}>
        <Text style={styles.text}>Go to ListScreen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Images')}
        style={styles.button}>
        <Text style={styles.text}>Go to ImageScreen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Counter')}
        style={styles.button}>
        <Text style={styles.text}>Go to Counter Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Color')}
        style={styles.button}>
        <Text style={styles.text}>Go to Color Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Square')}
        style={styles.button}>
        <Text style={styles.text}>Go to Square Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Text')}
        style={styles.button}>
        <Text style={styles.text}>Go to Text Screen</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "blue"
  },
  button: {
    backgroundColor: "yellow",
    marginVertical: 5
  }
});

export default HomeScreen;
