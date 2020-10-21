import React from "react";

const BrandSubForm = ({ handleCheck, handleChange, handleUpload, otherBrand }) => (
    <div>
        <div className="formheader-container">
            <div className="section-formheader-container">
                <h3 className="section-header">Marke</h3>
            </div>
            <div className="collapse-button-container">
                <a>
                    <h3 className="section-header collapse-button">+</h3>
                </a>
            </div>            
        </div>

        <div className="subform-container">
            <p className="form-paragraph">  
            Bei einer Marke mit besonderer Schriftgestaltung oder besonderer grafischer Gestaltung ist eine
            schwarz-weisse Abbildung einzureichen (im Feld rechts einfügen oder aufkleben). Verschiedene
            Grautöne müssen klar ersichtlich sein. Für Marken in Farbe (Farbanspruch Ziff. 9) ist eine farbige Abbildung einzureichen.
            </p>
            <p className="form-paragraph-important">
                Maximale Grösse der Abbildungen: 80 × 80 mm.
            </p>
            <div className="">
                <input type="checkbox" className="checkbox-input" id="traditionalBrand" name="traditionalBrand"
                    onChange={handleCheck}/>
                <label>Dreidimensionale Marke</label>
                <input type="checkbox" className="checkbox-input" id="acousticBrand" name="acousticBrand"
                    onChange={handleCheck}/>
                <label>Akustische Marke</label>
                <input type="checkbox" className="checkbox-input" id="colorBrand" name="colorBrand"
                    onChange={handleCheck}/>
                <label>Marke mit Farbanspruch</label>
                <input type="checkbox" className="checkbox-input" id="abstractBrand" name="abstractBrand"
                    onChange={handleCheck}/>
                <label>(Abstrakte) Farbmarke</label>
                <input type="checkbox" className="checkbox-input" id="otherBrand" name="otherBrand"
                    onChange={handleCheck}/>
                <label>Andere</label>
                <input type="text" className="form-control" name="other" id="other" placeholder="Autres" 
                onChange={handleChange} disabled={!otherBrand}/>
            </div>
            <input type="file" name="brandFile" id="brandFile" className="form-control file-input"
            onChange={handleUpload}/>
            <label htmlFor="brandFile">Laden Sie Ihre Marke hoch</label>        
        </div>
    </div>
)

export default BrandSubForm;