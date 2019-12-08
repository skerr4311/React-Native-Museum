import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { buttonStyle, textStyling } = styles

    return (
        <TouchableOpacity
            style={buttonStyle}
        >
            <Text style={textStyling}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    textStyling: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500',
        paddingTop: 3,
        paddingBottom: 3
    },
    buttonStyle: {
        alignSelf: 'stretch',
        borderRadius: 10,
        backgroundColor: '#748cab',
        borderColor: '#3e5c76',
        borderWidth: 1,
        marginLeft: 7,
        marginRight: 7,
        paddingLeft: 15,
        paddingRight: 15
    }
}

export default Button;