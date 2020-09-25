import React from 'react';

import ApplicantSubForm from './components/ApplicantSubForm';
import AgentSubForm from './components/AgentSubForm';
import ContactSubForm from './components/ContactSubForm';
import BrandSubForm from './components/BrandSubForm';
import TaxesSubForm from './components/TaxesSubForm';
import ServicesSubForm from './components/ServicesSubForm';
import BrandCategroy from './components/BrandCategory';
import Colors from './components/Colors';
import Notes from './components/Notes';
import Appendings from './components/Appendings';
import Date from './components/Date';

import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state =  {}
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let property = event.target.name;
    this.setState({[property]: event.target.value}, () => {console.log(this.state[property])}) 
  }

  handleCheck(event) {
    console.log(event.target.name)
    let property = event.target.name;
    this.setState({[property]: !this.state[property]}
      , () => {console.log(this.state)}
      )
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
  }

  render() {
    return <div className="App">
      <div className="page-container">
        <h1 className="page-header">Enregistrement d’une marque suisse</h1>    
      </div>

      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
        
        <ApplicantSubForm handleChange={this.handleChange}/>
        <AgentSubForm handleChange={this.handleChange}/>
        <ContactSubForm handleChange={this.handleChange}/>
        <BrandSubForm handleCheck={this.handleCheck} handleChange={this.handleChange}/>
        <TaxesSubForm handleCheck={this.handleCheck} handleChange={this.handleChange}/>
        <ServicesSubForm handleChange={this.handleChange}/>
        <BrandCategroy handleCheck={this.handleCheck} handleChange={this.handleChange}/>
        <Colors handleChange={this.handleChange}/>
        <Notes handleChange={this.handleChange}/>
        <Appendings handleCheck={this.handleCheck} handleChange={this.handleChange}/>
        <Date handleChange={this.handleChange}/>

        <hr/>
        
        <input type="submit" className="submit-button" value="Générer PDF"/>
        
        </form>
      </div>
    </div>
  }
  
}
