import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/components/Home';
import NewsList from './src/components/NewsList';
import DisplaysList from './src/components/DisplaysList';

const Project = createStackNavigator({
    Home: {
        screen: Home
    },
    News: {
        screen: NewsList
    },
    Displays: {
        screen: DisplaysList
    }
});

export default createAppContainer(Project);