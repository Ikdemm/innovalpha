import React, { Component } from "react";
import Navigation from "./components/Navigation";
import i18n from "./i18n";
import "./App.css";

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { lang: 'fr' }
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
          {/* <a onClick={() => {this.setState({lang: 'fr'})}} className="lang-link">FR</a> - */}
          {/* <a onClick={() => {this.setState({lang: 'de'})}} className="lang-link">DE</a> - */}
          {/* <a onClick={() => {this.setState({lang: 'it'})}} className="lang-link">IT</a> */}
          <a onClick={this.changeLanguage('fr')} className="lang-link">FR</a> -
          <a onClick={this.changeLanguage('de')} className="lang-link">DE</a> -
          <a onClick={this.changeLanguage('it')} className="lang-link">IT</a> 
        </div>
        <Navigation lang={this.state.lang} />
      </div>
    )
  }

}