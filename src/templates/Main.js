import React from 'react';
import { useDispatch } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from '../navigator/TabNavigator';
import { stateChange as routeStateChange } from '../reducks/router/operations';

const Main = () => {
    const dispatch = useDispatch();

    return (
        <NavigationContainer
            onStateChange={(event) => dispatch(routeStateChange(event))}
        >
            <TabNavigator />
        </NavigationContainer>
    )
}

export default Main