import React from 'react';

const Date = ({ handleChange, handleUpload }) => (
    <div>
        <div class="formheader-container">
            <div class="section-formheader-container">
                <h3 class="section-header">Date et Signature</h3>
            </div>
            <div class="collapse-button-container">
                <a>
                    <h3 class="section-header collapse-button">+</h3>
                </a>
            </div>            
        </div>

        <div class="subform-container row">
            <div class="col-sm">
                <label htmlFor="signingDate">Date</label>
                <input type="date" class="sum-input" name="signingDate" id="signingDate" onChange={handleChange}/>
            </div>
            <div class="col-sm">
                <input type="file" class="form-control file-input" name="signatureFile" id="signatureFile" onChange={handleUpload}/>
                <label htmlFor="signatureFile">Signature Digitale</label>
            </div>
        </div>
    </div>
)

export default Date;