import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';

import Item from './items';
import ItemSection from './ItemSection';

const NewsDetail = (props) => {
    const { imageStyle, headerContainer, timeStyle, titleStyle } = styles;

    return (
        <Item>
            <ItemSection>
                <Image
                    style={imageStyle}
                    source={{ uri: props.item.enclosureField.urlField }}
                />
            </ItemSection>
            <ItemSection>
                <View style={headerContainer}>
                    <TouchableOpacity onPress={ () => {
                        Linking.openURL(props.item.linkField);
                    }}>
                        <Text style={titleStyle}>{props.item.titleField}</Text>
                    </TouchableOpacity>
                    <Text style={timeStyle}>{props.item.pubDateField}</Text>
                </View>
            </ItemSection>
            <ItemSection>
                <Text>{props.item.descriptionField}</Text>
            </ItemSection>
        </Item>
    );
}

const styles = {
    imageStyle: {
        height: 300,
        width: 0,
        flex: 1
    },
    headerContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    timeStyle: {
        color: 'grey',
        fontWeight: 'bold'
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: '500'
    }
}

export default NewsDetail;