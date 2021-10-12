import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Headline, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();

    return(
        <View>
            <Headline>ログイン</Headline>
            <Button
                onPress={() => navigation.navigate('TabHome', { item: { title: 'サインイン' } })}
            >
                ホーム
            </Button>
        </View>
    )
}

export default Login