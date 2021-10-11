import React, {useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from '../templates/Main';
import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    return(
        <Tab.Navigator>
            <Tab.Screen name="Main" component={Main} />
            <Tab.Screen name="Stack" component={StackNavigator} />
        </Tab.Navigator>
    )
}

export default TabNavigator