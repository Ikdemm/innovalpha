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

    /*---------- French ----------*/
    if (data.lang == 'fr') {
        if (data.tridimensionalBrand) { return "Marque tridimensionnelle"}
        if (data.acousticBrand) { return "Marque acoustique"}
        if (data.colorBrand) { return "Marque avec revendication de couleur"}
        if (data.abstractBrand) { return "Marque de couleur (abstraite)"}
        if (data.otherBrand) { return data.otherBrandName}
    }
    
    /*---------- Italien ----------*/
    if (data.lang == 'it') {
        if (data.tridimensionalBrand) { return "Marchio tridimensionale"}
        if (data.acousticBrand) { return "Marchio acustico"}
        if (data.colorBrand) { return "Marchio con rivendicazione di colore"}
        if (data.abstractBrand) { return "Marchio di colore (astratto"}
        if (data.otherBrand) { return data.otherBrandName}
    }
    
    /*---------- German ----------*/
    if (data.lang == 'de') {
        if (data.tridimensionalBrand) { return "Dreidimensionale Marke"}
        if (data.acousticBrand) { return "Akustische Marke"}
        if (data.colorBrand) { return "Marke mit Farbanspruch"}
        if (data.abstractBrand) { return "(Abstrakte) Farbmarke"}
        if (data.otherBrand) { return data.otherBrandName}
    }
}

module.exports = {getBrandCategory, getBrandType, checkEmail};
