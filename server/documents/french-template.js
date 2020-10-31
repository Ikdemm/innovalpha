module.exports = (data) => {
    
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Proposal for ${data.applicantFirstName}</title>        
        </head>

        <body>

            <style>

                * {
                    font-family: 'Roboto', sans-serif;
                }

                body {
                    align-items: center;
                    resize: both;
                    overflow: auto;
                }

                .title {
                    font-weight: 900;
                }
                
                .paragraph-text {
                    font-size: 1.1em;
                    font-weight: 300;
                    margin-bottom: 0;
                }
                
                .data-text {
                    font-size: 1em;
                    font-weight: 600;
                    margin-bottom: 0;
                    border: 0.1px solid rgb(100, 100, 100, 0.5);
                    padding: 0.2em;
                }
                
                .section-title {
                    font-weight: 900;
                    margin-bottom: 0;
                }
                
                b {
                    font-weight: 500;
                }
                
                .logo-container {
                    border: 0.1px solid rgb(100, 100, 100, 0.5);
                    height: 250px;
                }
                
                .flex-container {
                    display: flex;
                    width: 21cm;
                }

            </style>

                <div class="page-container">

                    <!-- <img src="./header-banner.PNG" alt="header" class="header-banner"> -->
                    
                    <div class="content-container">

                        <h1 class="title">Enregistrement d'une marque suisse</h1>
                        <p class="paragraph-text">
                            <b>&bull;</b> La brochure «Dépôt d’une marque» contient des renseignements sur les formalités de dépôt et la manière de remplir ce formulaire
                        </p>
                        <p class="paragraph-text">
                            <b>&bull; Mise en garde:</b> Au cours de la procédure d’enregistrement, nous n’examinons pas d’éventuelles atteintes à des marques ou
                            raisons de commerce déjà enregistrées. C’est pourquoi nous vous conseillons vivement de faire faire une recherche professionnelle
                            d’antériorités de marques similaires et identiques ainsi que de sociétés. Informations complémentaires sur www.ipi.ch. Nous vous
                            recommandons en outre de demander l’appui d’un conseil en marques (www.ipi.ch/conseils-marques).
                        </p>
                        <p class="paragraph-text">
                            <b>&bull; Dépôt électronique d’une marque par Internet: https://e-trademark.ige.ch</b>
                        </p>
                        
                        <div class="form-container">
                            <h3 class="section-title">1  Déposant/e</h3>
                            <p class="paragraph-text">Prénom, nom ou raison sociale, adresse, code postal, localité</p>
                            <p class="data-text">
                            ${data.applicantFirstName},
                            ${data.applicantLastName}, 
                            ${data.applicantSocialReason}, 
                            ${data.applicantAddress}, 
                            ${data.applicantPostCode},
                            ${data.applicantLocation}
                            </p>
                    
                    
                            <!------------ Mandataire --------------->
                            <h3 class="section-title">2  Mandataire</h3>
                            <p class="paragraph-text">Prénom, nom ou raison sociale, adresse, code postal, localité</p>
                            <p class="data-text">
                            ${data.agentFirstName},
                            ${data.agentLastName}, 
                            ${data.agentSocialReason}, 
                            ${data.agentAddress}, 
                            ${data.agentPostCode},
                            ${data.agentLocation}
                            </p>
                    
                            <!------------ Contact --------------->
                            <h3 class="section-title">3a  Personne à contacter</h3>
                            <p class="paragraph-text">Prénom, nom, téléphone</p>
                            <p class="data-text">
                            ${data.contactFirstName},
                            ${data.contactLastName}, 
                            ${data.contactPhone}
                            </p>
        
                            <h3 class="section-title">3b  Numéro de référence, dossier</h3>
                            <p class="data-text">${data.appNumber}</p>
        
                            <h3 class="section-title">3c  Communication électronique</h3>
                            <br>
                            <label for="communication" class="paragraph-text">
                                Dans la présente procédure, je souhaite recevoir les écrits de l’IPI par voie électronique
                                à l’adresse suivante*:
                            </label>
                            <p class="data-text">${data.contactEmail}</p>
                            <p class="paragraph-text">* L’adresse indiquée doit être enregistrée sur une plateforme de messagerie reconnue pour transmettre par voie électronique des documents dans le cadre d’une procédure administrative
                                fédérale. Pour plus d’informations: www.ipi.ch/communication-electronique.
                            </p>


                            <!------------ Marque --------------->
                            <h3 class="section-title">4  Marque</h3>
                            <p class="paragraph-text">
                                S’il s’agit d’une marque présentant
                                une police de caractère particulière
                                ou faisant intervenir un graphisme
                                particulier, veuillez déposer une reproduction en noir et blanc (à insérer ou coller ci-contre). Les zones
                                grises doivent apparaître distinctement. Pour les marques en couleur(s)
                                (voir ch. 9 couleurs revendiquées),
                                veuillez déposer une reproduction en
                                couleur(s). 
                            </p>
                            <p class="paragraph-text">
                                <b>
                                    Dimensions maximales de la
                                    reproduction: 80 × 80 mm.   
                                </b>
                            </p>
                            <p class="data-text">${data.brandType}</p>

                            <!------------ Taxes --------------->
                            <h3 class="section-title">5  Taxes</h3>

                            <p class="paragraph-text">Taxes de dépôt</p>
                            <p class="data-text">${data.depositTax} à nous facturer</p>
                            <p class="data-text">${data.depositSum} à débiter de notre compte courant n° ${data.taxDepositAccount}</p>
                            
                            <p class="paragraph-text">Surtaxes pour classe suplémentaire</p>
                            <p class="data-text">${data.additionalSum} à nous facturer</p>
                            <p class="data-text">${data.additionalSumTax} à débiter de notre compte courant n° ${data.additionalTaxDepositAccount}</p>
                        
                            <!------------ Prducts/services --------------->
                            <h3 class="section-title">6  Produits</h3>
                            <p class="paragraph-text">${data.products}</p>
                        
                            <!------------ Brand Category --------------->
                            <h3 class="section-title">7  Catégorie de Marque</h3>
                            <p class="paragraph-text">${data.brandCategory}</p>

                        </div>
                    </div>
                </div>

        </body>
    </html>
    `
}