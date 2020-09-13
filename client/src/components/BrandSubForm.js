import React from "react";

export default class BrandSubForm extends React.Component {
    render() {
        return(
            <div>
                <div class="formheader-container">
                    <div class="section-formheader-container">
                        <h3 class="section-header">Marque</h3>
                    </div>
                    <div class="collapse-button-container">
                        <a>
                            <h3 class="section-header collapse-button">+</h3>
                        </a>
                    </div>            
                </div>
        
                <div class="subform-container">
                    <p class="form-paragraph">
                        S’il s’agit d’une marque présentant une police de caractère particulière ou faisant intervenir un graphisme
                        particulier, veuillez déposer une reproduction en noir et blanc (à insérer ou coller ci-contre). Les zones grises doivent apparaître distinctement.
                        Pour les marques en couleur(s) (voir ch. 9 couleurs revendiquées), veuillez déposer une reproduction en couleur(s).
                    </p>
                    <p class="form-paragraph-important">
                        Dimensions maximales de la reproduction: 80 × 80 mm. 
                    </p>
                    <div class="">
                        <input type="checkbox" class="checkbox-input" id="traditionalBrand" name="traditionalBrand"/>
                        <label for="traditionalBrand">Marque tridimensionnelle</label>
                        <input type="checkbox" class="checkbox-input" id="acousticBrand" name="acousticBrand"/>
                        <label for="acousticBrand">Marque acoustique</label>
                        <input type="checkbox" class="checkbox-input" id="colorBrand" name="colorBrand"/>
                        <label for="colorBrand">Marque avec revendication de couleur</label>
                        <input type="checkbox" class="checkbox-input" id="abstractBrand" name="abstractBrand"/>
                        <label for="abstractBrand">Marque de couleur (abstraite)</label>
                        <input type="checkbox" class="checkbox-input" id="otherBrand" name="otherBrand"/>
                        <label for="otherBrand">Autres</label>
                        <input type="text" class="form-control" name="other" id="other" placeholder="Autres"/>
                    </div>
                    <input type="file" name="brandFile" id="brandFile" class="form-control file-input"/>        
                </div>
            </div>
        )
    }
}