import React, { Component } from "react";

import FrenchForm from '../fr/FrenchForm';
import GermanForm from '../de/GermanForm';
import ItalienForm from '../it/ItalienForm';

export default class Navigation extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    switch (this.props.lang) {
      case 'fr': 
        return <FrenchForm></FrenchForm>
      case 'de':
        return <GermanForm></GermanForm>
      case 'it':
        return <ItalienForm></ItalienForm>
    }
  }

}