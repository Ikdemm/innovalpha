import React from 'react';

const BrandCategory = ({ handleCheck }) => (
    <div>
        <div className="formheader-container">
            <div className="section-formheader-container">
                <h3 className="section-header">Catégorie de marque</h3>
            </div>
            <div className="collapse-button-container">
                {/* <a>
                    <h3 className="section-header collapse-button">+</h3>
                </a> */}
            </div>            
        </div>

        <div className="subform-container">
            <p className="form-paragraph">
                Veuillez marquer d’une croix ce qui convient. A défaut d’indication, la marque sera considérée comme
                une marque individuelle.
            </p>
            <div className="">
                <input type="checkbox" className="checkbox-input" id="individualBrand" name="individualBrand" onChange={handleCheck}/>
                <label>Marque individuelle</label>
                <input type="checkbox" className="checkbox-input" id="waranthyBrand" name="waranthyBrand" onChange={handleCheck}/>
                <label>Marque de garantie</label>
                <input type="checkbox" className="checkbox-input" id="collectiveBrand" name="collectiveBrand" onChange={handleCheck}/>
                <label>Marque collective</label>
            </div>
        </div>
    </div>
)

export default BrandCategory;