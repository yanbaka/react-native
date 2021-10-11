import React, { Component } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Provider } from "react-redux"
import createStore from './src/reducks/store/store';
import TabNavigator from './src/navigator/TabNavigator';
import { Provider as PaperProvider } from 'react-native-paper';

export const store = createStore();

export default function App() {
    const getCurrentRoute = (state) => {
      if (state.index === undefined || state.index < 0) {
        return undefined;
      }
      const nestedState = state.routes[state.index].state;
      if (nestedState !== undefined) {
        return getCurrentRoute(nestedState);
      }
      return state.routes[state.index].name;
    };

    const onStateChange = (state) => {
      console.log('-----------------')
      console.log(getCurrentRoute(state))
    }
  
    return (
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer
            onStateChange={onStateChange}
            >
            <TabNavigator />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    )
}