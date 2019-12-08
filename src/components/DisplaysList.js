import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

import DisplaysDetail from './DisplaysDetail';

//class always needs a render method
class DisplaysList extends Component {
    state = { displaysList: [] };

    componentDidMount() {
        axios.get('http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/items')
            .then((response) => {
                this.setState({ displaysList: response.data });
            });
    }

    renderList = () => {
        return this.state.displaysList.map(item => {
            return <DisplaysDetail key={item.Title} item={item}/>;   
        })
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderList()}
            </View>
        );
    }
}

export default DisplaysList;