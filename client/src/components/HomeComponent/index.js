import React, { Component } from "react";
import { FormComponent } from './components/HomeComponent'
import i18n from "./i18n";

export default class HomeComponent extends Component {

    changeLanguage = (ln) => {
      return () => {
        i18n.changeLanguage(ln);
        console.log(`Language changed to ${ln}`)
      }
    }
  
    setFrenchLanguage = () => {
    //   this.setState({lang: 'fr'}, this.changeLanguage('fr'))
      this.props.setFrenchLanguage();
      this.changeLanguage('fr')
    //   console.log(this.state)
    }
  
    setGermanLanguage = () => {
    //   this.setState({lang: 'de'}, this.changeLanguage('de'))
        this.props.setGermanLanguage();
        this.changeLanguage('de')
    //   console.log(this.state)
    }
  
    setItalienLanguage = () => {
    //   this.setState({lang: 'it'}, this.changeLanguage('it'))
    //   console.log(this.state)
        this.props.setItalienLanguage();
        this.changeLanguage('it')
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