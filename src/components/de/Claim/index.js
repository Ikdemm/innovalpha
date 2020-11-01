import React from 'react';

const ClaimSubForm = ({ handleChange }) => (
    <div>
        <div className="formheader-container">
            <div className="section-formheader-container">
                <h3 className="section-header">Prioritätsanspruch</h3>
            </div>
            <div className="collapse-button-container">
                <a>
                    <h3 className="section-header collapse-button">+</h3>
                </a>
            </div>            
        </div>

        <div className="subform-container">
            <p className="form-paragraph">Gemäss Pariser Verbandsübereinkunft</p>
            <div className="form-row">
                <div className="text-input">
                    <label>Land</label>
                    <input type="text" className="form-control" id="country" name="country" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>Datum der Ersthinterlegung</label>
                    <input type="date" className="form-control" id="depositDate" name="depositDate" onChange={handleChange}/>
                </div>
            </div>
            <p className="form-paragraph">Wird eine Teilpriorität geltend gemacht, muss präzisiert werden, auf welche Waren und/oder Dienstleistungen sich die Priorität bezieht, oder es muss ein entsprechender Prioritätsbeleg vorgelegt werden.</p>
        </div>
    </div>
)

export default ClaimSubForm;