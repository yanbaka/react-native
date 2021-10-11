import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from "react-redux"
import createStore from './src/reducks/store/store';
import { Provider as PaperProvider } from 'react-native-paper';
import Main from './src/templates/Main';
import ErrorModal from './src/templates/ErrorModal';

export const store = createStore();

export default function App() {
    return (
      <Provider store={store}>
        <PaperProvider>
          <Main />
          <ErrorModal />
        </PaperProvider>
      </Provider>
    )
}