import React from 'react';
import { View, Text } from 'react-native';

import Button from './Button';

const Tabs = () => {
    const { wrapper } = styles;

    return (
        <View style={wrapper}>
            <Button title={'Home'}/>
            <Button title={'News'}/>
            <Button title={'Displays'}/>
            <Button title={'Guest Book'}/>
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