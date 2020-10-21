import React from 'react';


const AgentSubForm = ({ handleChange }) => (
    <div>
        <div className="formheader-container">
            <h3 className="section-header">Mandataire</h3>
            {/* <a>
                <h3 className="section-header collapse-button">+</h3>
            </a> */}
        </div>        

        <div className="subform-container">

            <div className="form-row">

                <div className="text-input">
                    <label>Prénom</label>
                    <input type = "text" className="form-control" id="agentFirstName" name="agentFirstName" required onChange={handleChange}/>
                </div>
    
                <div className="text-input">
                    <label>Nom</label>
                    <input type = "text" className="form-control" id="agentLastName" name="agentLastName" required onChange={handleChange}/>
                </div>
    
                <div className="text-input">
                    <label>Raison sociale</label>
                    <input type = "text" className="form-control" id="agentSocialReason" name="agentSocialReason" required onChange={handleChange}/>
                </div>
    
                <div className="text-input">
                    <label>Adresse</label>
                    <input type = "text" className="form-control" id="agentAddress" name="agentAddress" required onChange={handleChange}/>
                </div>
    
                <div className="text-input">
                    <label>Code Postal</label>
                    <input type = "text" className="form-control" id="agentPostCode" name="agentPostCode" required onChange={handleChange}/>
                </div>
    
                <div className="text-input">
                    <label>Localité</label>
                    <input type = "text" className="form-control" id="agentLocation" name="agentLocation" required onChange={handleChange}/>
                </div>
    
            </div>

        </div>
    </div>
)

export default AgentSubForm;
        