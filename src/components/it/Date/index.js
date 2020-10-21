import React from 'react';

const Date = ({ handleChange, handleUpload }) => (
    <div>
        <div className="formheader-container">
            <div className="section-formheader-container">
                <h3 className="section-header">Data e firma</h3>
            </div>
            <div className="collapse-button-container">
                <a>
                    <h3 className="section-header collapse-button">+</h3>
                </a>
            </div>            
        </div>

        <div className="subform-container row">
            <div className="col-sm">
                <label htmlFor="signingDate">Data</label>
                <input type="date" className="sum-input" name="signingDate" id="signingDate" onChange={handleChange}/>
            </div>
            <div className="col-sm">
                <input type="file" className="form-control file-input" name="signatureFile" id="signatureFile" onChange={handleUpload}/>
                <label htmlFor="signatureFile">Firma digitale</label>
            </div>
        </div>
    </div>
)

export default Date;