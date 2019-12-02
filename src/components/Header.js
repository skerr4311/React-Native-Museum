import React from 'react';
import { Text, View, Image } from 'react-native';

const Header = () => {
    const { imageStyle, textStyling, wrapper } = styles;

    return (
        <View style={wrapper}>
            <Image 
                style={imageStyle}
                source={require('../images/Default.png')}
            />
            <Text>Museum</Text>
            <Image 
                style={imageStyle}
                source={require('../images/Default.png')}
            />
        </View>
    );
}

const styles = {
    imageStyle: {
        width: 80,
        height: 80
    },
    textStyling: {

    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
}

export default Header;