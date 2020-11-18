import React from "react";
import { useTranslation } from 'react-i18next';

function BrandSubForm ({ handleCheck, handleChange, handleUpload, otherBrand }) {

    const { t, i18n } = useTranslation();

    return (

        <div>
            <div className="formheader-container">
                <div className="section-formheader-container">
                    <h3 className="section-header">{t("section4-title")}</h3>
                </div>
                <div className="collapse-button-container">
                    <a>
                        <h3 className="section-header collapse-button">+</h3>
                    </a>
                </div>            
            </div>

            <div className="subform-container">
                <p className="form-paragraph">  
                    {t("brandParagraph")}
                </p>
                <p className="form-paragraph-important">
                    {t("brandHint")}
                </p>
                <div className="">
                    <input type="checkbox" className="checkbox-input" id="tridimensionalBrand" name="tridimensionalBrand"
                        onChange={handleCheck}/>
                    <label>{t("tridimentionalBrand")}</label>
                    <input type="checkbox" className="checkbox-input" id="acousticBrand" name="acousticBrand"
                        onChange={handleCheck}/>
                    <label>{t("acousticBrand")}</label>
                    <input type="checkbox" className="checkbox-input" id="colorBrand" name="colorBrand"
                        onChange={handleCheck}/>
                    <label>{t("colorBrand")}</label>
                    <input type="checkbox" className="checkbox-input" id="abstractBrand" name="abstractBrand"
                        onChange={handleCheck}/>
                    <label>{t("abstractBrand")}</label>
                    <input type="checkbox" className="checkbox-input" id="otherBrand" name="otherBrand"
                        onChange={handleCheck}/>
                    <label>{t("other")}</label>
                    <input type="text" className="form-control" name="otherBrandName" id="otherBrandName" placeholder="Autres" 
                    onChange={handleChange} disabled={!otherBrand}/>
                </div>
                <input type="file" name="brandFile" id="brandFile" className="form-control file-input"
                onChange={handleUpload}/>
                <label htmlFor="brandFile">{t("uploadBrand")}</label>        
            </div>
        </div>
    )

}

export default BrandSubForm;