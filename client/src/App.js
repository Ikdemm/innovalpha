import React from 'react';
import ApplicantSubForm from './components/ApplicantSubForm';
import AgentSubForm from './components/AgentSubForm';
import ContactSubForm from './components/ContactSubForm';
import BrandSubForm from './components/BrandSubForm';
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

        
        </form>
      </div>
    </div>
  );
}

export default App;
