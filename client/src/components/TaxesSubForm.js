import React from 'react';

export default class TaxesSubForm extends React.Component {
    render() {
        return(
            <div>
                <div className="formheader-container">
                    <div className="section-formheader-container">
                        <h3 className="section-header">Taxes</h3>
                    </div>
                    <div className="collapse-button-container">
                        <a>
                            <h3 className="section-header collapse-button">+</h3>
                        </a>
                    </div>            
                </div>

                <div className="subform-container">
                    <p className="form-paragraph-important">
                        Taxes de dépôt
                    </p>
                    <div className="">
                        <input type="checkbox" className="checkbox-input" id="depositTaxCheck" name="depositTaxCheck"/>
                        <label for="depositTax">CHF</label>
                        <input type="number" className="sum-input" name="depositTax" id="depositTax"/> à nous facturer.
                    </div>
                    <div className="">
                        <input type="checkbox" className="checkbox-input" id="depositSumCheck" name="depositSumCheck"/>
                        <label for="depositSumCheck">CHF</label>
                        <input type="number" className="sum-input" name="depositSum" id="depositSum"/>
                        à débiter de notre compte courant nº
                        <input type="number" className="sum-input" name="depositAccount" id="depositAccount"/>
                        auprès de l’IPI.
                    </div>
                    <p className="form-paragraph-important">
                        Surtaxe pour classNamee supplémentaire
                    </p>
                    <div className="">
                        <input type="checkbox" className="checkbox-input" id="additionalTaxCheck" name="additionalTaxCheck"/>
                        <label for="additionalTaxCheck">CHF</label>
                        <input type="number" className="sum-input" name="additionalSum" id="additionalSum"/> à nous facturer.
                    </div>
                    <div className="">
                        <input type="checkbox" className="checkbox-input" id="additionalTaxCheck" name="additionalTaxCheck"/>
                        <label for="additionalTaxCheck">CHF</label>
                        <input type="number" className="sum-input" name="depositTax" id="depositTax"/>
                        à débiter de notre compte courant nº
                        <input type="number" className="sum-input" name="depositAccount" id="depositAccount"/>
                        auprès de l’IPI.
                    </div>
                </div>
            </div>
            )
    }
}