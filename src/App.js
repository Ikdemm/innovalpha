import React, { Component } from "react";

import FrenchForm from './components/fr/FrenchForm';
import GermanForm from './components/de/GermanForm';
import ItalienForm from './components/it/ItalienForm';

import "./App.css";

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { lang: 'it' }
  }

  render() {
    switch (this.state.lang) {
      case 'fr': 
        return <FrenchForm></FrenchForm>
      case 'de':
        return <GermanForm></GermanForm>
      case 'it':
        return <ItalienForm></ItalienForm>
    }
  }

}