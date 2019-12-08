import React from 'react';
import { View, Text } from 'react-native';

const Tabs = () => {
    const { wrapper } = styles;

    return (
        <View style={wrapper}>
            <Text>Home</Text>
            <Text>News</Text>
            <Text>Displays</Text>
            <Text>Guest Book</Text>
        </View>
    );
}

const styles = {
    wrapper: {
        flexDirection: 'row',
        backgroundColor: '#1d2d44',
        padding: 10
    }
}

export default Tabs;