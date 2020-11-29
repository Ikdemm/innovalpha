import React, { Component } from "react";
import { connect } from 'react-redux';
import i18n from "./i18n";
import "./App.css";
import FormComponent from "./components/FormComponent";


const mapStateToProps = state => {
    return {
      lang: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
      setFrenchLanguage: () => dispatch({ type: 'fr' }),
      setGermanLanguage: () => dispatch({ type: 'de' }),
      setItalienLanguage: () => dispatch({ type: 'it' })
    }
  };
  
export const Container = connect(mapStateToProps, mapDispatchToProps)(Component);


export default class App extends Component {

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
        
        <FormComponent/>
      </div>
    )
  }

}

const Container = () => {}

export default Container;