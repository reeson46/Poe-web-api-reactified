import React from 'react';
import { render } from 'react-dom';
import MainLayout from './MainLayout';
import { Provider } from "react-redux";
import { store } from '../state/store';

const App = () => {

  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  )
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);

export default App
