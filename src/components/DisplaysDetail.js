import React from 'react';
import { View, Text, Image } from 'react-native';

const DisplaysDetail = (props) => {
    const { imageStyle } = styles;

    return (
        <View>
            <Text>{props.item.Description}</Text>
            <View>
                <Image
                    style={imageStyle}
                    source={{ uri: 'https://facebook.github.io/react/assets/logo_og.png' }}
                />
                <Text>{props.item.Title}</Text>
            </View>
        </View>
    );
}

const styles = {
    imageStyle: {
        height: 50,
        width: 0
    }
}

export default DisplaysDetail;