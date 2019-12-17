import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from './src/components/Home';
import NewsList from './src/components/NewsList';
import DisplaysList from './src/components/DisplaysList';

const TabNavigator = createBottomTabNavigator({
    Home: Home,
    News: NewsList,
    Displays: DisplaysList
},
{
    tabBarOptions: {
        style: {
            backgroundColor: '#1d2d44'
        },
        labelStyle: {
            fontSize: 14,
            lineHeight: 16,
            paddingBottom: 12
        }
    }

});

export default createAppContainer(TabNavigator);