import React from 'react';

const Notes = ({ handleChange }) => (
    <div>
        <div className="formheader-container">
            <div className="section-formheader-container">
                <h3 className="section-header">Osservazioni</h3>
            </div>
            <div className="collapse-button-container">
                <a>
                    <h3 className="section-header collapse-button">+</h3>
                </a>
            </div>            
        </div>

        <div className="subform-container">
            <textarea id="notes" name="notes" className="form-control" rows="7" cols="33" onChange={handleChange}></textarea>
        </div>
    </div>
)

export default Notes;