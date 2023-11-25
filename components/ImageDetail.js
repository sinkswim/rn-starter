import React from "react";
import { Image, View, Text, StyleSheet} from "react-native";

const ImageDetail = ({imageSource, title, imageScore}) => {
    return <View>
            <Image source={imageSource}/>
            <Text>{title}</Text>
            <Text>Score: {imageScore}</Text>
        </View>;
};

const style = StyleSheet.create ({

});

export default ImageDetail;