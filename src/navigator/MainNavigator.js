import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from '../templates/Intro';
import Signin from '../templates/Signin';
import Login from '../templates/Login';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen
                    name="Intro" component={Intro}
                />
                <Stack.Group>
                    <Stack.Screen
                        name="Signin" component={Signin}
                    />
                    <Stack.Group screenOptions={{ presentation: 'modal' }}>
                        <Stack.Screen
                            name="Login" component={Login}
                        />
                    </Stack.Group>
                </Stack.Group>
            </Stack.Group>
            <Stack.Screen
                name="TabHome"
                component={TabNavigator}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator