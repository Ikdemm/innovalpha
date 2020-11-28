import React, { Component } from "react";
import i18n from "./i18n";
import "./App.css";
import FormComponent from "./components/FormComponent";

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

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      lang: ''
    }
  }

  changeLanguage = (ln) => {
    return () => {
      i18n.changeLanguage(ln);
      console.log(`Language changed to ${ln}`)
    }
  }

  setFrenchLanguage = () => {
    this.setState({lang: 'fr'}, this.changeLanguage('fr'))
    console.log(this.state)
  }

  setGermanLanguage = () => {
    this.setState({lang: 'de'}, this.changeLanguage('de'))
    console.log(this.state)
  }

  setItalienLanguage = () => {
    this.setState({lang: 'it'}, this.changeLanguage('it'))
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <div className="lang-top-bar">
          <a onClick={this.setFrenchLanguage} className="lang-link">FR</a> -
          <a onClick={this.setGermanLanguage} className="lang-link">DE</a> -
          <a onClick={this.setItalienLanguage} className="lang-link">IT</a> 
        </div>
        <FormComponent lang={this.state.lang}/>
      </div>
    )
  }

}