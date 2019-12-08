import React from 'react';
import { Text, Image } from 'react-native';

import Item from './items';
import ItemSection from './ItemSection';

const DisplaysDetail = (props) => {
    const { imageStyle } = styles;

    return (
        <Item>
            <ItemSection>
                <ItemSection>
                <Image
                    style={imageStyle}
                    source={{ uri: 'http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/itemimg?id=poly' }}
                />
                </ItemSection>
                <Text>{props.item.Title}</Text>
            </ItemSection>
            <ItemSection>
                <Text>{props.item.Description}</Text>
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

export default DisplaysDetail;