//import libraries  
import React from 'react';
import { View, Text, AppRegistry } from 'react-native';

import Header from './src/components/Header';
import Tabs from './src/components/Tabs';
import DisplaysList from './src/components/DisplaysList';

//create component
const App = () => {
    return (
        <View>
            <Header /> 
            <Tabs /> 
            <DisplaysList />  
        </View>
    );
}

//render component to screen
AppRegistry.registerComponent('museum', () => App);