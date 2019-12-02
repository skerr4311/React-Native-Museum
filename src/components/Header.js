import React from 'react';
import { Text, View, Image } from 'react-native';

const Header = () => {
    const { imageStyle, textStyling, wrapper, textWrapper } = styles;

    return (
        <View style={wrapper}>
            <Image 
                style={imageStyle}
                source={require('../images/Default.png')}
            />
            <View style={textWrapper}>
                <Text style={textStyling}>The Bob Doran Museum of Computing</Text>
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

        width: 80,
        height: 80
    },
    textWrapper: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    textStyling: {
        color: 'red'
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

export default Header;