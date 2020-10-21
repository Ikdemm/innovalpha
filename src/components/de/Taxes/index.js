import React from 'react';

const TaxesSubForm = ({ handleCheck, handleChange }) => (
    <div>
        <div className="formheader-container">
            <div className="section-formheader-container">
                <h3 className="section-header">Gebühren</h3>
            </div>
            <div className="collapse-button-container">
                <a>
                    <h3 className="section-header collapse-button">+</h3>
                </a>
            </div>            
        </div>

        <div className="subform-container">
            <p className="form-paragraph-important">
                Hinterlegungsgebühr
            </p>
            <div className="">
                <input type="checkbox" className="checkbox-input" id="depositTaxCheck" name="depositTaxCheck"
                    onChange={handleCheck}
                />
                <label>CHF</label>
                <input type="number" className="sum-input" name="depositTax" id="depositTax" onChange={handleChange}/> ist uns in Rechnung zu stellen.
            </div>
            <div className="">
                <input type="checkbox" className="checkbox-input" id="depositSumCheck" name="depositSumCheck"
                    onChange={handleCheck}
                />
                <label>CHF</label>
                <input type="number" className="sum-input" name="depositSum" id="depositSum" onChange={handleChange}/>
                ist unserem Kontokorrent Nr.
                <input type="number" className="sum-input" name="taxDepositAccount" id="taxDepositAccount" onChange={handleChange}/>
                beim IGE zu belasten.
            </div>
            <p className="form-paragraph-important">
                Klassenzuschlag
            </p>
            <div className="">
                <input type="checkbox" className="checkbox-input" id="additionalTaxCheck" name="additionalTaxCheck"
                    onChange={handleCheck}
                />
                <label>CHF</label>
                <input type="number" className="sum-input" name="additionalSum" id="additionalSum" onChange={handleChange}/> ist uns in Rechnung zu stellen.
            </div>
            <div className="">
                <input type="checkbox" className="checkbox-input" id="additionalTaxCheck" name="additionalTaxCheck"
                    onChange={handleCheck}
                />
                <label>CHF</label>
                <input type="number" className="sum-input" name="depositTax" id="depositTax" onChange={handleChange}/>
                ist unserem Kontokorrent Nr.
                <input type="number" className="sum-input" name="additionalTaxDepositAccount" id="additionalTaxDepositAccount" onChange={handleChange}/>
                beim IGE zu belasten.
            </div>
        </div>
    </div>
)

export default TaxesSubForm;