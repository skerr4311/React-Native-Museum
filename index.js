//import libraries  
import React from 'react';
import { View, Text, AppRegistry } from 'react-native';

//create component
const App = () => {
    return (
        <View>
            <Text>Hello</Text>
        </View>
    );
}

//render component to screen
AppRegistry.registerComponent('museum', () => App);