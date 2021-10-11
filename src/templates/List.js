import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Button } from 'react-native';

const List = () => {
    const navigation = useNavigation();
    return(
        <View>
            <Button
                title="詳細1"
                onPress={() => navigation.navigate('Detail', { item: { name: '詳細1', title: 'タイトル1' } })} />
            <Button
                title="詳細2"
                onPress={() => navigation.navigate('Detail', { item: { name: '詳細2', title: 'タイトル2' } })} />
        </View>
    )
}

export default List