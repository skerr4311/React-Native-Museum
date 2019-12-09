import React, { Component } from 'react';
import { ScrollView } from 'react-native';
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
        return (
            <ScrollView>
                {this.renderList()}
            </ScrollView>
        );
    }
}

export default DisplaysList;