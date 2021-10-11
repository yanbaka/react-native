import React from 'react';
import { Provider } from "react-redux"
import createStore from './src/reducks/store/store';
import { Provider as PaperProvider } from 'react-native-paper';
import Main from './src/templates/Main';

export const store = createStore();

export default function App() {
    return (
      <Provider store={store}>
        <PaperProvider>
          <Main />
        </PaperProvider>
      </Provider>
    )
}