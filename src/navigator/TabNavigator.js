import React, {useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../templates/Home';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen
                name="Stack"
                component={StackNavigator}
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator