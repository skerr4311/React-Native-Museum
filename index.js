//import libraries  
import React from 'react';
import { View, Text, AppRegistry } from 'react-native';

import Header from './src/components/Header';

//create component
const App = () => {
    return (
        <View>
            <Header />
        </View>
    );
}

//render component to screen
AppRegistry.registerComponent('museum', () => App);