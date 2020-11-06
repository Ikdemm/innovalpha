import React from 'react';
import { useTranslation } from 'react-i18next';

function TaxesSubForm({ handleCheck, handleChange }) {

    const { t, i18n } = useTranslation();

    return (
        <div>
            <div className="formheader-container">
                <div className="section-formheader-container">
                    <h3 className="section-header">{t("section3-title")}</h3>
                </div>
                <div className="collapse-button-container">
                    <a>
                        <h3 className="section-header collapse-button">+</h3>
                    </a>
                </div>            
            </div>
    
            <div className="subform-container">
                <p className="form-paragraph-important">
                    {t("depositTax")}
                </p>
                <div className="">
                    <input type="checkbox" className="checkbox-input" id="depositTaxCheck" name="depositTaxCheck"
                        onChange={handleCheck}
                    />
                    <label>CHF</label>
                    <input type="number" className="sum-input" name="depositTax" id="depositTax" onChange={handleChange}/> {t("toPay")}
                </div>
                <div className="">
                    <input type="checkbox" className="checkbox-input" id="depositSumCheck" name="depositSumCheck"
                        onChange={handleCheck}
                    />
                    <label>CHF</label>
                    <input type="number" className="sum-input" name="depositSum" id="depositSum" onChange={handleChange}/>
                    {t("toDept")}
                    <input type="number" className="sum-input" name="taxDepositAccount" id="taxDepositAccount" onChange={handleChange}/>
                    {t("fromIpi")}
                </div>
                <p className="form-paragraph-important">
                    {t("additionalTax")}
                </p>
                <div className="">
                    <input type="checkbox" className="checkbox-input" id="additionalTaxCheck" name="additionalTaxCheck"
                        onChange={handleCheck}
                    />
                    <label>CHF</label>
                    <input type="number" className="sum-input" name="additionalSum" id="additionalSum" onChange={handleChange}/> {t("toPay")}
                </div>
                <div className="">
                    <input type="checkbox" className="checkbox-input" id="additionalTaxSumCheck" name="additionalTaxSumCheck"
                        onChange={handleCheck}
                    />
                    <label>CHF</label>
                    <input type="number" className="sum-input" name="additionalSumTax" id="additionalSumTax" onChange={handleChange}/>
                    {t("toDept")}
                    <input type="number" className="sum-input" name="additionalTaxDepositAccount" id="additionalTaxDepositAccount" onChange={handleChange}/>
                    {t("fromIpi")}
                </div>
            </div>
        </div>
    )

} 

export default TaxesSubForm;