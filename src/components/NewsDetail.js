import React from 'react';
import { Text, Image } from 'react-native';

import Item from './items';
import ItemSection from './ItemSection';

const NewsDetail = (props) => {
    const { imageStyle } = styles;

    return (
        <Item>
            <ItemSection>
                <ItemSection>
                <Image
                    style={imageStyle}
                    source={{ uri: props.item.enclosureField.urlField }}
                />
                </ItemSection>
                <Text>{props.item.titleField}</Text>
                <Text>{props.item.pubDateField}</Text>
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
    }
}

export default NewsDetail;