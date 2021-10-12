import React from 'react';
import { View } from 'react-native';
import { Headline, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Signin = () => {
    const navigation = useNavigation();
    return(
        <View>
            <Headline>サインイン</Headline>
            <Button
                onPress={() => navigation.navigate('Login', { item: { title: 'ログイン' } })}
            >
                ログイン
            </Button>
        </View>
    )
}

export default Signin