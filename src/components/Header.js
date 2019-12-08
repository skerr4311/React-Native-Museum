import React from 'react';
import { Text, View, Image } from 'react-native';
import { INVERTED_COLOR } from 'jest-matcher-utils';

const Header = () => {
    const { imageStyle, textStyling, wrapper, textWrapper } = styles;

    return (
        <View style={wrapper}>
            <Image 
                style={imageStyle}
                source={require('../images/Default.png')}
            />
            <View style={textWrapper}>
                <Text style={textStyling}>      The Bob Doran</Text>
                <Text style={textStyling}>Museum of Computing</Text>
            </View>
            <Image 
                style={imageStyle}
                source={require('../images/Default.png')}
            />
        </View>
    );
}

const styles = {
    imageStyle: {
        tintColor: 'white',
        width: 80,
        height: 80
    },
    textWrapper: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    textStyling: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500'
    },
    wrapper: {
        backgroundColor: '#0d1321',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

export default Header;