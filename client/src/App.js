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

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <h1 className="page-header">Enregistrement d’une marque suisse</h1>    
      </div>

      <div className="form-container">
        <form>
        
        <ApplicantSubForm/>
        <AgentSubForm/>
        <ContactSubForm/>
        <BrandSubForm/>
        <TaxesSubForm/>
        <ServicesSubForm/>
        <BrandCategroy/>
        <Colors/>
        <Notes/>
        <Appendings/>
        <Date/>

        <hr/>
        
        <input type="submit" class="submit-button" value="Générer PDF"/>
        
        </form>
      </div>
    </div>
  );
}

export default App;
