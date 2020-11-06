import React, { Component } from "react";
import i18n from "./i18n";
import "./App.css";
import FormComponent from "./components/FormComponent";

export default class App extends Component {
  
  constructor(props) {
    super(props);
  }

  changeLanguage = (ln) => {
    return () => {
      i18n.changeLanguage(ln);
      console.log(`Language changed to ${ln}`)
    }
  }

  render() {
    return (
      <div>
        <div className="lang-top-bar">
          <a onClick={this.changeLanguage('fr')} className="lang-link">FR</a> -
          <a onClick={this.changeLanguage('de')} className="lang-link">DE</a> -
          <a onClick={this.changeLanguage('it')} className="lang-link">IT</a> 
        </div>
        <FormComponent />
      </div>
    )
  }

}