import React from "react";

const ServicesSubForm = ({ handleChange, handleUpload }) => (
    <div>
        <div className="formheader-container">
            <div className="section-formheader-container">
                <h3 className="section-header">Lista dei prodotti e/o dei servizi</h3>
            </div>
            <div className="collapse-button-container">
                <a>
                    <h3 className="section-header collapse-button">+</h3>
                </a>
            </div>            
        </div>

        <div className="subform-container">
            <p className="form-paragraph">
                Per designare prodotti o servizi, si prega di utilizzare la terminologia e l’ordine cronologico della Classificazione internazionale. Vi raccomandiamo di utilizzare la lista «Classificazione internazionale dei
                prodotti e servizi» messa a disposizione dall’IPI come anche la base dati on line su https://wdl.ige.ch.
                La lista può essere inoltrata su foglio separato. Qualora venga indicato esclusivamente il numero
                di classe, l’IPI presuppone che la domanda concerne tutti i termini generali appartenenti alla classe
                in questione (si veda la lista dei termini generali su www.ipi.ch/lps-it). Ciò non vale tuttavia per
                la classe 45, i cui termini generali sono definiti troppo ampiamente. Per questa classe l’IPI esigerà
                un’ulteriore precisazione.
            </p>
            <div className="">
                <textarea id="products" name="products" className="form-control" rows="7" cols="33"
                onChange={handleChange}></textarea>
            </div>
            <p>Seguito su foglio separato </p>
            <input type="file" name="productsFile" id="productsFile" className="form-control file-input"
            onChange={handleUpload}/>
            <label htmlFor="productsFile">Lega una foglia</label>
        </div>
    </div>
)

export default ServicesSubForm;