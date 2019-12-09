import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import NewsDetail from './NewsDetail';

//class always needs a render method
class NewsList extends Component {
    state = { newsList: [] };

    componentDidMount() {
        axios.get('http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/news')
            .then((response) => {
                this.setState({ newsList: response.data });
            });
    }

    renderList = () => {
        return this.state.newsList.map(item => {
            return <NewsDetail key={item.titleField} item={item}/>;   
        })
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderList()}
            </ScrollView>
        );
    }
}

export default NewsList;