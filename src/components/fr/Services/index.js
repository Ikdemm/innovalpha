import React from "react";

const ServicesSubForm = ({ handleChange, handleUpload }) => (
    <div>
        <div className="formheader-container">
            <div className="section-formheader-container">
                <h3 className="section-header">Liste de produits et/ou services</h3>
            </div>
            <div className="collapse-button-container">
                <a>
                    <h3 className="section-header collapse-button">+</h3>
                </a>
            </div>            
        </div>

        <div className="subform-container">
            <p className="form-paragraph">
                Veuillez indiquer les produits ou les services au moyen de la terminologie et dans l’ordre de la
                classification internationale. Nous vous recommandons d’utiliser la liste «Classification internationale
                des produits et services» mise à disposition par l’IPI ainsi que la base de données en ligne sous
                https://wdl.ige.ch. La liste peut aussi être produite sur une feuille séparée. Lorsque seul le numéro de
                classe est indiqué, l’IPI part du principe que toutes les indications générales figurant dans l’intitulé
                de cette classe sont revendiquées (voir la liste des intitulés de classes sous www.ipi.ch/lps). Ceci
                n’est toutefois pas valable pour la classe 45, dont les intitulés de classe sont formulés de manière trop
                générale. Pour cette classe, l’IPI devra exiger des précisions.
            </p>
            <div className="">
                <textarea id="products" name="products" className="form-control" rows="7" cols="33"
                onChange={handleChange}></textarea>
            </div>
            <p>Voir feuille séparée </p>
            <input type="file" name="productsFile" id="productsFile" className="form-control file-input"
            onChange={handleUpload}/>
            <label htmlFor="productsFile">Attacher la feuille des produits</label>
        </div>
    </div>
)

export default ServicesSubForm;