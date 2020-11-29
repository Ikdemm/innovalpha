import React, { Component } from "react";
import "./App.css";
import { Provider } from 'react-redux';
import { Container } from './container';
import { store } from './configure-store';

const App = () => (
  <Provider store={store}>
    <Container/>
  </Provider>
)

export default App;