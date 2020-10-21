import React from 'react';

const BrandCategory = ({ handleCheck }) => (
    <div>
        <div className="formheader-container">
            <div className="section-formheader-container">
                <h3 className="section-header">Categoria di marchio</h3>
            </div>
            <div className="collapse-button-container">
                {/* <a>
                    <h3 className="section-header collapse-button">+</h3>
                </a> */}
            </div>            
        </div>

        <div className="subform-container">
            <p className="form-paragraph">
                Indicare con una crocetta la categoria che fa al caso
            </p>
            <div className="">
                <input type="checkbox" className="checkbox-input" id="individualBrand" name="individualBrand" onChange={handleCheck}/>
                <label>Marchio individuale</label>
                <input type="checkbox" className="checkbox-input" id="waranthyBrand" name="waranthyBrand" onChange={handleCheck}/>
                <label>Marchio di garanzia</label>
                <input type="checkbox" className="checkbox-input" id="collectiveBrand" name="collectiveBrand" onChange={handleCheck}/>
                <label>Marchio collettivo</label>
            </div>
        </div>
    </div>
)

export default BrandCategory;