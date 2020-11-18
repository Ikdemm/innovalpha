import React from 'react';
import { useTranslation } from 'react-i18next';


function AgentSubForm ({ handleChange }) {

    const { t, i18n } = useTranslation();
    
    return (
        <div>
            <div className="formheader-container">
                <h3 className="section-header">{t('section2-title')}</h3>
                {/* <a>
                    <h3 className="section-header collapse-button">+</h3>
                </a> */}
            </div>        

            <div className="subform-container">

                <div className="form-row">

                    <div className="text-input">
                        <label>{t('firstName')}</label>
                        <input type = "text" className="form-control" id="agentFirstName" name="agentFirstName" onChange={handleChange}/>
                    </div>
        
                    <div className="text-input">
                        <label>{t('lastName')}</label>
                        <input type = "text" className="form-control" id="agentLastName" name="agentLastName" onChange={handleChange}/>
                    </div>
        
                    <div className="text-input">
                        <label>{t('socialReason')}</label>
                        <input type = "text" className="form-control" id="agentSocialReason" name="agentSocialReason" onChange={handleChange}/>
                    </div>
        
                    <div className="text-input">
                        <label>{t('address')}</label>
                        <input type = "text" className="form-control" id="agentAddress" name="agentAddress" onChange={handleChange}/>
                    </div>
        
                    <div className="text-input">
                        <label>{t('postCode')}</label>
                        <input type = "text" className="form-control" id="agentPostCode" name="agentPostCode" onChange={handleChange}/>
                    </div>
        
                    <div className="text-input">
                        <label>{t('location')}</label>
                        <input type = "text" className="form-control" id="agentLocation" name="agentLocation" onChange={handleChange}/>
                    </div>
        
                </div>

            </div>
        </div>
    )
}

    

export default AgentSubForm;
        