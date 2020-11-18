import React from 'react';

const Colors = ({ handleChange }) => (
    <div>
        <div className="formheader-container">
            <div className="section-formheader-container">
                <h3 className="section-header">Couleur(s) revendiquée(s)</h3>
            </div>
            <div className="collapse-button-container">
                <a>
                    <h3 className="section-header collapse-button">+</h3>
                </a>
            </div>            
        </div>

        <div className="subform-container">
            <textarea id="colors" name="colors" className="form-control" rows="7" cols="33" onChange={handleChange}></textarea>
        </div>
    </div>
)

export default Colors;