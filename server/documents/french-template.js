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
                    width: 595px;
                    align-items: center;
                    resize: both;
                    overflow: auto;
                }

                .title {
                    font-weight: 900;
                }
                
                .page-container {
                    width: 21cm;
                }
                
                .header-banner {
                    text-align: center;
                    width: 21cm;
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
                            
                        </div>
                    </div>
                </div>

        </body>
    </html>
    `
}