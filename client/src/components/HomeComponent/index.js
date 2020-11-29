import React, { Component } from "react";
// import FormComponent from '../FormComponent'
import { FormContainer } from '../../container'
import { Provider } from 'react-redux';
import { store } from '../../configure-store';  
import i18n from "../../i18n";

export default class HomeComponent extends Component {

    constructor(props) {
        super(props)
    }

    changeLanguage = (ln) => {
        return () => {
            this.props.setLanguage(ln);
            i18n.changeLanguage(ln);
            console.log(`Language changed to ${ln}`)
        }
    }

    // setFrenchLanguage = () => {
    //     this.props.setFrenchLanguage(); 
    //     return () => {
    //         i18n.changeLanguage('fr');
    //         console.log(`Language changed to fr`)
    //     }
    // }

    // setGermanLanguage = () => {
    //     this.props.setGermanLanguage();
    //     return () => {
    //         i18n.changeLanguage('de');
    //         console.log(`Language changed to de`)
    //     }
    // }

    // setItalienLanguage = () => {
    //     this.props.setItalienLanguage();
    //     return () => {
    //         i18n.changeLanguage('it');
    //         console.log(`Language changed to it`)
    //     }
    // }
  
    render() {
      return (
        <div>
          <div className="lang-top-bar">
            <a onClick={this.changeLanguage('fr')} className="lang-link">FR</a> -
            <a onClick={this.changeLanguage('de')} className="lang-link">DE</a> -
            <a onClick={this.changeLanguage('it')} className="lang-link">IT</a> 
          </div>
          <Provider store={store}>
            <FormContainer/>
          </Provider>
        </div>
      )
    }
  
}