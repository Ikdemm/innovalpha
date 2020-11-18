import React from "react";
import { useTranslation } from 'react-i18next';

function ServicesSubForm ({ handleChange, handleUpload }) {
    
    const { t, i18n } = useTranslation();
    
    return (
        <div>
            <div className="formheader-container">
                <div className="section-formheader-container">
                    <h3 className="section-header">{t("section6-title")}</h3>
                </div>
                <div className="collapse-button-container">
                    <a>
                        <h3 className="section-header collapse-button">+</h3>
                    </a>
                </div>            
            </div>

            <div className="subform-container">
                <p className="form-paragraph">{t("products paragraph")}</p>
                <div className="">
                    <textarea id="products" name="products" className="form-control" rows="7" cols="33"
                    onChange={handleChange}></textarea>
                </div>
                <p>{t("products hint")}</p>
                <input type="file" name="productsFile" id="productsFile" className="form-control file-input"
                onChange={handleUpload}/>
                <label htmlFor="productsFile">{t("upload products sheet")}</label>
            </div>
        </div>
    )

}

export default ServicesSubForm;