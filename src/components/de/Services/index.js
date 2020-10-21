import React from "react";

const ServicesSubForm = ({ handleChange, handleUpload }) => (
    <div>
        <div className="formheader-container">
            <div className="section-formheader-container">
                <h3 className="section-header">Verzeichnis der Waren und/oder Dienstleistungen (WDL)</h3>
            </div>
            <div className="collapse-button-container">
                <a>
                    <h3 className="section-header collapse-button">+</h3>
                </a>
            </div>            
        </div>

        <div className="subform-container">
            <p className="form-paragraph">
                Für die Angaben der Waren und/oder Dienstleistungen ist die Terminologie und Reihenfolge der
                internationalen Klassifikation zu beachten. Wir empfehlen Ihnen, die vom IGE zur Verfügung gestellte
                Liste «Internationale Waren- und Dienstleistungsklassifikation» sowie die Online-Datenbank unter
                https://wdl.ige.ch zu benutzen. Das Verzeichnis kann auch auf einem separaten Blatt eingereicht
                werden. Wenn lediglich die Klassennummer angegeben wird, geht das IGE davon aus, dass sämtliche Oberbegriffe dieser Klasse beansprucht werden (vgl. Verzeichnis der Oberbegriffe unter
                www.ige.ch/wdl). Dies gilt jedoch nicht für die Klasse 45, deren Oberbegriffe zu weit gefasst sind.
                Für diese Klasse wird das IGE eine Präzisierung verlangen. 
            </p>
            <div className="">
                <textarea id="products" name="products" className="form-control" rows="7" cols="33"
                onChange={handleChange}></textarea>
            </div>
            <p>Fortsetzung auf separatem Blatt</p>
            <input type="file" name="productsFile" id="productsFile" className="form-control file-input"
            onChange={handleUpload}/>
            <label htmlFor="productsFile">Attacher la feuille des produits</label>
        </div>
    </div>
)

export default ServicesSubForm;