import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');
    const passwordErrorMessage = 'Password length must be over 5 characters.';

    return (
        <View>
            <Text>Enter password:</Text>
            <TextInput 
                style={style.input}
                autoCapitalize="none"   // We usually use these 3 props for password input for eg.
                autoCorrect={false}
                autoComplete="off"
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {password.length <= 5 ? <Text>{passwordErrorMessage}</Text> : null}
        </View>
    );

};

const style = StyleSheet.create({
    input: {
        margin: 15,
        border: 'black',
        borderWidth: 1,
    }
});

export default TextScreen;