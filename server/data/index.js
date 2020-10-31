/*--------- Checking if the Email was provided -----------*/

const checkEmail = (data) => {

    /*---------- French ----------*/
    if (data.lang == 'fr') {
        return ((data.contactEmail) ? data.contactEmail : "Aucun email fourni")
    }
    
    /*---------- Italien ----------*/
    if (data.lang == 'it') {
        return ((data.contactEmail) ? data.contactEmail : "nessuna email fornita")
    }
    
    /*---------- German ----------*/
    if (data.lang == 'de') {
        return ((data.contactEmail) ? data.contactEmail : "Keine E-Mail bereitgestellt")
    }
}


/*--------- Getting the Brand Category -----------*/

const getBrandCategory = (data) => {

    /*---------- French ----------*/
    if (data.lang == 'fr') {
        if (data.individualBrand) { return "Marque Individuelle"}
        if (data.waranthyBrand) { return "Marque de garantie"}
        if (data.collectiveBrand) { return "Marque Collective"}
    }
    
    /*---------- Italien ----------*/
    if (data.lang == 'it') {
        if (data.individualBrand) { return "Marchio individuale"}
        if (data.waranthyBrand) { return "Marchio di garanzia"}
        if (data.collectiveBrand) { return "Marchio collettivo"}
    }
    
    /*---------- German ----------*/
    if (data.lang == 'de') {
        if (data.individualBrand) { return "Individualmarke"}
        if (data.waranthyBrand) { return "Garantiemarke"}
        if (data.collectiveBrand) { return "Kollektivmarke"}
    }
}

/*--------- Getting the Brand Type -----------*/

const getBrandType = (data) => {

    let resultBrand = ''

    /*---------- French ----------*/
    if (data.lang == 'fr') {
        if (data.tridimensionalBrand) { resultBrand = resultBrand.concat("Marque tridimensionnelle")}
        if (data.acousticBrand) { resultBrand = resultBrand.concat("  Marque acoustique")}
        if (data.colorBrand) { resultBrand = resultBrand.concat("  Marque avec revendication de couleur")}
        if (data.abstractBrand) { resultBrand = resultBrand.concat(" Marque de couleur (abstraite)")}
        if (data.otherBrand) { resultBrand = resultBrand.concat("  " + data.otherBrandName)}
    }
    
    /*---------- Italien ----------*/
    if (data.lang == 'it') {
        if (data.tridimensionalBrand) { resultBrand = resultBrand.concat("Marchio tridimensionale")}
        if (data.acousticBrand) { resultBrand = resultBrand.concat("  Marchio acustico")}
        if (data.colorBrand) { resultBrand = resultBrand.concat("  Marchio con rivendicazione di colore")}
        if (data.abstractBrand) { resultBrand = resultBrand.concat("  Marchio di colore (astratto)")}
        if (data.otherBrand) { resultBrand = resultBrand.concat("  " + data.otherBrandName)}
    }
    
    /*---------- German ----------*/
    if (data.lang == 'de') {
        if (data.tridimensionalBrand) { resultBrand = resultBrand.concat("Dreidimensionale Marke")}
        if (data.acousticBrand) { resultBrand = resultBrand.concat("  Akustische Marke")}
        if (data.colorBrand) { resultBrand = resultBrand.concat("  Marke mit Farbanspruch")}
        if (data.abstractBrand) { resultBrand = resultBrand.concat("  (Abstrakte) Farbmarke")}
        if (data.otherBrand) { resultBrand = resultBrand.concat("  " + data.otherBrandName)}
    }

    return resultBrand.trim();
}

/*--------- Getting the Brand Category -----------*/

const getBrandCategory = (data) => {

    let resultBrand = ''

    /*---------- French ----------*/
    if (data.lang == 'fr') {
        if (data.individualBrand) { resultBrand = resultBrand.concat("Marque individuelle")}
        if (data.waranthyBrand) { resultBrand = resultBrand.concat("  Marque de garantie")}
        if (data.collectiveBrand) { resultBrand = resultBrand.concat("  Marque collective")}
    }
    
    /*---------- Italien ----------*/
    if (data.lang == 'it') {
        if (data.tridimensionalBrand) { resultBrand = resultBrand.concat("  Marchio individuale")}
        if (data.acousticBrand) { resultBrand = resultBrand.concat("  Marchio di garanzia")}
        if (data.colorBrand) { resultBrand = resultBrand.concat("  Marchio collettivo")}
    }
    
    /*---------- German ----------*/
    if (data.lang == 'de') {
        if (data.tridimensionalBrand) { resultBrand = resultBrand.concat("Individualmarke")}
        if (data.acousticBrand) { resultBrand = resultBrand.concat("  Garantiemarke")}
        if (data.colorBrand) { resultBrand = resultBrand.concat("  Kollektivmarke")}
    }

    return resultBrand.trim();
}

module.exports = {getBrandCategory, getBrandType, checkEmail, getBrandCategory};
