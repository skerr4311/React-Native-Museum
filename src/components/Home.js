import React from 'react';
import { View, Text, Image } from 'react-native';


import ItemSection from './ItemSection';
import Item from './items'

const Home = () => {
    const { imageStyle, textStyle } = styles

    return (
        <Item>
            <Text style={textStyle}> 
                Welcome to our displays on the history of computing and computers. 
                You might like to have a look at the history time line in the entrance 
                corridor down below or visit one of the lobbies to the right for 
                displays containing more detail. You can learn more about the displays 
                here, where you can also see a list of the many topics that we cover. 
                Enjoy! If you are intrigued by what you find here and live close to 
                Auckland, or are visiting the city, please feel free to drop in to the 
                department and see the displays for yourself. We are located at the 
                University on Princes Street and are always open during normal office 
                hours and also in the evenings and on the weekends when classes are in 
                session. 
            </Text>
            <ItemSection>
                <Image 
                    style={imageStyle}
                    source={{ uri: 'https://thespinoff.co.nz/wp-content/uploads/2019/04/eight_col_uni_of_auckland-850x510.jpg'}}
                />
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
    textStyle: {
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center'
    }
}

export default Home;