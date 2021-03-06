import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Detail = () => {
    const route = useRoute();
    const { item } = route.params

    return(
        <View>
            <Text>{item.name}</Text>
        </View>
    )
}

export default Detail