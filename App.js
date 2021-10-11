import React, { Component } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Provider } from "react-redux"
import createStore from './src/reducks/store/store';
import TabNavigator from './src/navigator/TabNavigator';
import { Provider as PaperProvider } from 'react-native-paper';

export const store = createStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    );
  }
}