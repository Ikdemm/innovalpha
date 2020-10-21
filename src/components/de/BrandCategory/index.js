import React from 'react';

const BrandCategory = ({ handleCheck }) => (
    <div>
        <div className="formheader-container">
            <div className="section-formheader-container">
                <h3 className="section-header">Markenart</h3>
            </div>
            <div className="collapse-button-container">
                {/* <a>
                    <h3 className="section-header collapse-button">+</h3>
                </a> */}
            </div>            
        </div>

        <div className="subform-container">
            <p className="form-paragraph">
                Bitte eine der nachfolgenden Markenarten ankreuzen. Andernfalls handelt es sich um eine Individualmarke.
            </p>
            <div className="">
                <input type="checkbox" className="checkbox-input" id="individualBrand" name="individualBrand" onChange={handleCheck}/>
                <label>Individualmarke</label>
                <input type="checkbox" className="checkbox-input" id="waranthyBrand" name="waranthyBrand" onChange={handleCheck}/>
                <label>Garantiemarke</label>
                <input type="checkbox" className="checkbox-input" id="collectiveBrand" name="collectiveBrand" onChange={handleCheck}/>
                <label>Kollektivmarke</label>
            </div>
        </div>
    </div>
)

export default BrandCategory;