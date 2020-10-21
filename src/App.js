import React, { Component } from "react";

import FrenchForm from './components/fr/FrenchForm';
import GermanForm from './components/de/GermanForm';

import "./App.css";

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { lang: 'de' }
  }

  render() {
    switch (this.state.lang) {
      case 'fr': 
        return <FrenchForm></FrenchForm>
      case 'de':
        return <GermanForm></GermanForm>
    }
  }

}