import React from 'react';
import { useDispatch } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from '../navigator/TabNavigator';
import MainNavigator from '../navigator/MainNavigator';
import { stateChange as routeStateChange } from '../reducks/router/operations';

const Main = () => {
    const dispatch = useDispatch();

    return (
        <NavigationContainer
            onStateChange={(event) => dispatch(routeStateChange(event))}
        >
            <MainNavigator />
        </NavigationContainer>
    )
}

export default Main