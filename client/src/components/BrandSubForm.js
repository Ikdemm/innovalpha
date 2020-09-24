import React from "react";

export default class BrandSubForm extends React.Component {
    render() {
        return(
            <div>
                <div className="formheader-container">
                    <div className="section-formheader-container">
                        <h3 className="section-header">Marque</h3>
                    </div>
                    <div className="collapse-button-container">
                        <a>
                            <h3 className="section-header collapse-button">+</h3>
                        </a>
                    </div>            
                </div>
        
                <div className="subform-container">
                    <p className="form-paragraph">
                        S’il s’agit d’une marque présentant une police de caractère particulière ou faisant intervenir un graphisme
                        particulier, veuillez déposer une reproduction en noir et blanc (à insérer ou coller ci-contre). Les zones grises doivent apparaître distinctement.
                        Pour les marques en couleur(s) (voir ch. 9 couleurs revendiquées), veuillez déposer une reproduction en couleur(s).
                    </p>
                    <p className="form-paragraph-important">
                        Dimensions maximales de la reproduction: 80 × 80 mm. 
                    </p>
                    <div className="">
                        <input type="checkbox" className="checkbox-input" id="traditionalBrand" name="traditionalBrand"
                         onChange={this.props.handleCheck}/>
                        <label>Marque tridimensionnelle</label>
                        <input type="checkbox" className="checkbox-input" id="acousticBrand" name="acousticBrand"
                         onChange={this.props.handleCheck}/>
                        <label>Marque acoustique</label>
                        <input type="checkbox" className="checkbox-input" id="colorBrand" name="colorBrand"
                         onChange={this.props.handleCheck}/>
                        <label>Marque avec revendication de couleur</label>
                        <input type="checkbox" className="checkbox-input" id="abstractBrand" name="abstractBrand"
                         onChange={this.props.handleCheck}/>
                        <label>Marque de couleur (abstraite)</label>
                        <input type="checkbox" className="checkbox-input" id="otherBrand" name="otherBrand"
                         onChange={this.props.handleCheck}/>
                        <label>Autres</label>
                        <input type="text" className="form-control" name="other" id="other" placeholder="Autres" 
                        onChange={this.props.handleChange}/>
                    </div>
                    <input type="file" name="brandFile" id="brandFile" className="form-control file-input"/>        
                </div>
            </div>
        )
    }
}