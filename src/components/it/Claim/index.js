import React from 'react';

const ClaimSubForm = ({ handleChange }) => (
    <div>
        <div className="formheader-container">
            <div className="section-formheader-container">
                <h3 className="section-header">Rivendicazione di priorità</h3>
            </div>
            <div className="collapse-button-container">
                <a>
                    <h3 className="section-header collapse-button">+</h3>
                </a>
            </div>            
        </div>

        <div className="subform-container">
            <p className="form-paragraph">Secondo la Convenzione di Parigi</p>
            <div className="form-row">
                <div className="text-input">
                    <label>Paese</label>
                    <input type="text" className="form-control" id="country" name="country" onChange={handleChange}/>
                </div>

                <div className="text-input">
                    <label>Data del primo deposito</label>
                    <input type="date" className="form-control" id="depositDate" name="depositDate" onChange={handleChange}/>
                </div>
            </div>
            <p className="form-paragraph">Se è rivendicata una priorità parziale, occorre specificare a quali prodotti e/o servizi si riferisce
            oppure presentare il relativo documento di priorità.</p>
        </div>
    </div>
)

export default ClaimSubForm;