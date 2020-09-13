import React from 'react';

export default class AgentSubForm extends React.Component {
    render() {
        return(
            <div>
                <div className="formheader-container">
                    <h3 className="section-header">Mandataire</h3>
                    <a>
                        <h3 className="section-header collapse-button">+</h3>
                    </a>
                </div>        

                <div className="subform-container">

                    <div className="form-row">

                        <div className="text-input">
                            <label for="agentFirstName">Prénom</label>
                            <input type = "text" className="form-control" id="agentFirstName" name="agentFirstName" required/>
                        </div>
            
                        <div className="text-input">
                            <label for="agentLastName">Nom</label>
                            <input type = "text" className="form-control" id="agentLastName" name="agentLastName" required/>
                        </div>
            
                        <div className="text-input">
                            <label for="agentSocialReason">Raison sociale</label>
                            <input type = "text" className="form-control" id="agentSocialReason" name="agentSocialReason" required/>
                        </div>
            
                        <div className="text-input">
                            <label for="agentAddress">Adresse</label>
                            <input type = "text" className="form-control" id="agentAddress" name="agentAddress" required/>
                        </div>
            
                        <div className="text-input">
                            <label for="agentPostCode">Code Postal</label>
                            <input type = "text" className="form-control" id="agentPostCode" name="agentPostCode" required/>
                        </div>
            
                        <div className="text-input">
                            <label for="agentLocation">Localité</label>
                            <input type = "text" className="form-control" id="agentLocation" name="agentLocation" required/>
                        </div>
            
                    </div>

                </div>
            </div>
        )
    }
}
        