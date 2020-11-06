import React from 'react';
import { useTranslation } from 'react-i18next';

function ClaimSubForm ({ handleChange }) {

    const { t, i18n } = useTranslation();

    return (
        <div>
            <div className="formheader-container">
                <div className="section-formheader-container">
                    <h3 className="section-header">{t("section8-title")}</h3>
                </div>
                <div className="collapse-button-container">
                    <a>
                        <h3 className="section-header collapse-button">+</h3>
                    </a>
                </div>            
            </div>
    
            <div className="subform-container">
                <p className="form-paragraph">{t("according to the convention")}</p>
                <div className="form-row">
                    <div className="text-input">
                        <label>{t("country")}</label>
                        <input type="text" className="form-control" id="country" name="country" onChange={handleChange}/>
                    </div>
    
                    <div className="text-input">
                        <label>{t("depositDate")}</label>
                        <input type="date" className="form-control" id="depositDate" name="depositDate" onChange={handleChange}/>
                    </div>
                </div>
                <p className="form-paragraph">{t("prioirity hint")}</p>
            </div>
        </div>
    )
} 

export default ClaimSubForm;