import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../templates/Detail';
import List from '../templates/List';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="List" component={List}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={({ route }) => (
                    {
                        title: route.params.item.title
                    }
                )}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator