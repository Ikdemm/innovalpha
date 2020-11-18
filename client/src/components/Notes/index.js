import React from 'react';
import { useTranslation } from 'react-i18next';

function Notes ({ handleChange }){
    
    const { t, i18n } = useTranslation();

    return (
        <div>
            <div className="formheader-container">
                <div className="section-formheader-container">
                    <h3 className="section-header">{t("section10-title")}</h3>
                </div>
                <div className="collapse-button-container">
                    <a>
                        <h3 className="section-header collapse-button">+</h3>
                    </a>
                </div>            
            </div>
    
            <div className="subform-container">
                <textarea id="notes" name="notes" className="form-control" rows="7" cols="33" onChange={handleChange}></textarea>
            </div>
        </div>
    )

} 

export default Notes;