import React from 'react';


const AgentSubForm = ({ handleChange }) => (
    <div>
        <div className="formheader-container">
            <h3 className="section-header">Vertreter/in</h3>
            {/* <a>
                <h3 className="section-header collapse-button">+</h3>
            </a> */}
        </div>        

        <div className="subform-container">

            <div className="form-row">

                <div className="text-input">
                    <label>Vorname</label>
                    <input type = "text" className="form-control" id="agentFirstName" name="agentFirstName" onChange={handleChange}/>
                </div>
    
                <div className="text-input">
                    <label>Name</label>
                    <input type = "text" className="form-control" id="agentLastName" name="agentLastName" onChange={handleChange}/>
                </div>
    
                <div className="text-input">
                    <label>Firma</label>
                    <input type = "text" className="form-control" id="agentSocialReason" name="agentSocialReason" onChange={handleChange}/>
                </div>
    
                <div className="text-input">
                    <label>Adresse</label>
                    <input type = "text" className="form-control" id="agentAddress" name="agentAddress" onChange={handleChange}/>
                </div>
    
                <div className="text-input">
                    <label>PLZ</label>
                    <input type = "text" className="form-control" id="agentPostCode" name="agentPostCode" onChange={handleChange}/>
                </div>
    
                <div className="text-input">
                    <label>Ort</label>
                    <input type = "text" className="form-control" id="agentLocation" name="agentLocation" onChange={handleChange}/>
                </div>
    
            </div>

        </div>
    </div>
)

export default AgentSubForm;
        