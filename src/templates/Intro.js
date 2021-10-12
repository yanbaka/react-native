import React from 'react';
import { View } from 'react-native';
import { Headline, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Intro = () => {
    const navigation = useNavigation();
    return(
        <View>
            <Headline>イントロ</Headline>
            <Button
                onPress={() => navigation.navigate('Signin', { item: { title: 'サインイン' } })}
            >
                サインイン
            </Button>
        </View>
    )
}

export default Intro