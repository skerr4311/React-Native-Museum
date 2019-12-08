import React from 'react';
import { View } from 'react-native';

const Item = (props) => {
    return (
        <View style={styles.viewStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    viewStyle: {
        borderTopWidth: 1,
        borderColor: '#3e5c76',
        shadowOffSet: { width: 1, height: 1},
        opacity: 0.8,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
}

export default Item;