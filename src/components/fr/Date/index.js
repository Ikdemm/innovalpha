import React from 'react';
import { useTranslation } from 'react-i18next';

const Date = ({ handleChange, handleUpload }) {

    const { t, i18n } = useTranslation();

    return (
        <div>
            <div className="formheader-container">
                <div className="section-formheader-container">
                    <h3 className="section-header">{t("section12-title")}</h3>
                </div>
                <div className="collapse-button-container">
                    <a>
                        <h3 className="section-header collapse-button">+</h3>
                    </a>
                </div>            
            </div>
    
            <div className="subform-container row">
                <div className="col-sm">
                    <label htmlFor="signingDate">{t("date")}</label>
                    <input type="date" className="sum-input" name="signingDate" id="signingDate" onChange={handleChange}/>
                </div>
                <div className="col-sm">
                    <input type="file" className="form-control file-input" name="signatureFile" id="signatureFile" onChange={handleUpload}/>
                    <label htmlFor="signatureFile">{t("digital signature")}</label>
                </div>
            </div>
        </div>
    )


} 

export default Date;