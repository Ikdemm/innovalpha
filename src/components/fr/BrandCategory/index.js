import React from 'react';
import { useTranslation } from 'react-i18next';

function BrandCategory ({ handleCheck }) {

    const { t, i18n } = useTranslation();

    return (
        <div>
            <div className="formheader-container">
                <div className="section-formheader-container">
                    <h3 className="section-header">{t("section7-title")}</h3>
                </div>
                <div className="collapse-button-container">
                    {/* <a>
                        <h3 className="section-header collapse-button">+</h3>
                    </a> */}
                </div>            
            </div>
    
            <div className="subform-container">
                <p className="form-paragraph">{t("brand-category paragraph")}</p>
                <div className="">
                    <input type="checkbox" className="checkbox-input" id="individualBrand" name="individualBrand" onChange={handleCheck}/>
                    <label>{t("individual brand")}</label>
                    <input type="checkbox" className="checkbox-input" id="waranthyBrand" name="waranthyBrand" onChange={handleCheck}/>
                    <label>{t("warranty brand")}</label>
                    <input type="checkbox" className="checkbox-input" id="collectiveBrand" name="collectiveBrand" onChange={handleCheck}/>
                    <label>{t("collective brand")}</label>
                </div>
            </div>
        </div>
    )
} 

export default BrandCategory;