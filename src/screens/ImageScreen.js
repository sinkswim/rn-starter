import React from "react";
import { View, Text, StyleSheet} from "react-native";
import ImageDetail from "../../components/ImageDetail";

const ImageScreen = () => {
    const imageLocation = '../../assets/images/';

    return <View>
            <ImageDetail 
                title={'Forest'} 
                imageSource={require(imageLocation+'forest.jpg')}
                imageScore={'8'}
            />
            <ImageDetail 
                title={'Beach'} 
                imageSource={require(imageLocation+'/beach.jpg')}
                imageScore={'6'}
            />
            <ImageDetail 
                title={'Mountain'} 
                imageSource={require(imageLocation+'mountain.jpg')}
                imageScore={'9'}
            />
        </View>
};

const style = StyleSheet.create ({

});

export default ImageScreen;