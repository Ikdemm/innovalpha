import React, { Component } from "react";
import i18n from "./i18n";
import "./App.css";
import FormComponent from "./components/FormComponent";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Container } from './container';

let store = createStore(languageReducer)

const languageReducer = function (state = 'fr', action) {
  switch (action.type) {
    case 'fr':
      return state = 'fr';
    case 'de': 
      return state = 'de';
    case 'it':
      return state = 'it';
    default:
      return state;
  }
}

const App = () => (
  <Provider store={store}>
    <Container/>
  </Provider>
)

export default App;