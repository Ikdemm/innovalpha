import React from "react";

const BrandSubForm = ({ handleCheck, handleChange, handleUpload, otherBrand }) => (
    <div>
        <div className="formheader-container">
            <div className="section-formheader-container">
                <h3 className="section-header">Marchio</h3>
            </div>
            <div className="collapse-button-container">
                <a>
                    <h3 className="section-header collapse-button">+</h3>
                </a>
            </div>            
        </div>

        <div className="subform-container">
            <p className="form-paragraph">  
                Per i marchi con una forma scritta
                o grafica particolare deve essere
                depositata un’immagine in bianco
                e nero che va incollata o inserita
                nel riquadro qui accanto. Le diverse
                tonalità di grigio devono apparire
                distintamente. Per i marchi a colori
                (v. cif. 9 rivendicazione di colori)
                deve venir depositata un’immagine
                a colori.
            </p>
            <p className="form-paragraph-important">
                Misura massima delle riproduzioni: 80 × 80 mm.
            </p>
            <div className="">
                <input type="checkbox" className="checkbox-input" id="traditionalBrand" name="traditionalBrand"
                    onChange={handleCheck}/>
                <label>Marchio tridimensionale</label>
                <input type="checkbox" className="checkbox-input" id="acousticBrand" name="acousticBrand"
                    onChange={handleCheck}/>
                <label>Marchio acustico</label>
                <input type="checkbox" className="checkbox-input" id="colorBrand" name="colorBrand"
                    onChange={handleCheck}/>
                <label>Marchio con rivendicazione di colore</label>
                <input type="checkbox" className="checkbox-input" id="abstractBrand" name="abstractBrand"
                    onChange={handleCheck}/>
                <label>Marchio di colore (astratto)</label>
                <input type="checkbox" className="checkbox-input" id="otherBrand" name="otherBrand"
                    onChange={handleCheck}/>
                <label>altro</label>
                <input type="text" className="form-control" name="other" id="other" placeholder="Autres" 
                onChange={handleChange} disabled={!otherBrand}/>
            </div>
            <input type="file" name="brandFile" id="brandFile" className="form-control file-input"
            onChange={handleUpload}/>
            <label htmlFor="brandFile">carica il tuo marchio</label>        
        </div>
    </div>
)

export default BrandSubForm;