import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation";

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { lang: 'fr' }
  }

  render() {
    return (
      <div>
        <div className="lang-top-bar">
          <a onClick={() => {this.setState({lang: 'fr'})}} className="lang-link">FR</a> -
          <a onClick={() => {this.setState({lang: 'de'})}} className="lang-link">DE</a> -
          <a onClick={() => {this.setState({lang: 'it'})}} className="lang-link">IT</a> 
        </div>
        <Navigation lang={this.state.lang} />
      </div>
    )
  }

}