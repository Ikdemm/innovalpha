module.exports = (data) => {
    
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Proposta per ${data.applicantFirstName} ${data.applicantLastName}</title>        
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

                        <h1 class="title">Registrazione di un marchio svizzero</h1>
                        <p class="paragraph-text">
                            <b>&bull;</b> L’opuscolo «Deposito di un marchio» fornisce le informazioni in merito alle formalità per il deposito e alla compilazione di questo
                            formulario.
                        </p>
                        <p class="paragraph-text">
                            <b>&bull; Attenzione:</b> durante la procedura di registrazione non verifichiamo possibili violazioni di marchi o di ditte precedenti. Vi consigliamo perciò vivamente di fare eseguire una ricerca professionale di anteriorità di marchi simili o identici, così come di ditte. Potete
                            trovare ulteriori informazioni a questo proposito sul nostro sito www.ipi.ch. Raccomandiamo inoltre il ricorso ad un rappresentante
                            specializzato in marchi (www.ipi.ch/rapp-marchi).
                        </p>
                        <p class="paragraph-text">
                            <b>&bull; Un marchio può essere depositato anche mediante Internet (https://e-trademark.ige.ch)</b>
                        </p>
                        
                        <div class="form-container">
                            <h3 class="section-title">1  Depositante</h3>
                            <p class="paragraph-text">Nome, cognome, rispettivamente ditta, indirizzo, CAP, località</p>
                            <p class="data-text">
                            ${data.applicantFirstName},
                            ${data.applicantLastName}, 
                            ${data.applicantSocialReason}, 
                            ${data.applicantAddress}, 
                            ${data.applicantPostCode},
                            ${data.applicantLocation}
                            </p>
                    
                    
                            <!------------ Rappresentante --------------->
                            <h3 class="section-title">2  Rappresentante</h3>
                            <p class="paragraph-text">Nome, cognome, rispettivamente ditta, indirizzo, CAP, località</p>
                            <p class="data-text">
                            ${data.agentFirstName},
                            ${data.agentLastName}, 
                            ${data.agentSocialReason}, 
                            ${data.agentAddress}, 
                            ${data.agentPostCode},
                            ${data.agentLocation}
                            </p>
                    
                            <!------------ contatto --------------->
                            <h3 class="section-title">3a  Persona di contatto</h3>
                            <p class="paragraph-text">Nome, cognome, telefono</p>
                            <p class="data-text">
                            ${data.contactFirstName},
                            ${data.contactLastName}, 
                            ${data.contactPhone}
                            </p>
        
                            <h3 class="section-title">3b  Numero di riferimento, incarto n.</h3>
                            <p class="data-text">${data.appNumber}</p>
        
                            <h3 class="section-title">3c  Comunicazione elettronica</h3>
                            <br>
                            <label for="communication" class="paragraph-text">
                                Per quel che concerne la presente procedura, chiedo che tutte le comunicazioni dell’IPI siano
                                trasmesse elettronicamente all’indirizzo e-mail*:                            
                            </label>
                            <p class="data-text">${data.contactEmail}</p>
                            <p class="paragraph-text">* * L’indirizzo e-mail indicato deve essere registrato presso una piattaforma riconosciuta
                                per la comunicazione per via elettronica di dati delle autorità federali. Maggiori informazioni:
                                www.ipi.ch/comunicazioneelettronica.
                            </p>


                            <!------------ Marchio --------------->
                            <h3 class="section-title">4  Marchio</h3>
                            <p class="paragraph-text">
                                Per i marchi con una forma scritta
                                o grafica particolare deve essere
                                depositata un’immagine in bianco
                                e nero che va incollata o inserita
                                nel riquadro qui accanto. Le diverse
                                tonalità di grigio devono apparire
                                distintamente. Per i marchi a colori
                                (v. cif. 9 rivendicazione di colori)
                                deve venir depositata un’immagine
                                a colori. 
                            </p>
                            <p class="paragraph-text">
                                <b>
                                    Misura massima delle riproduzioni: 80 × 80 mm.   
                                </b>
                            </p>
                            <p class="data-text">${data.brandType}</p>

                            <!------------ Taxes --------------->
                            <h3 class="section-title">5  Tasse</h3>

                            <p class="paragraph-text">Tassa di deposito</p>
                            <p class="data-text">${data.depositTax} da fatturarci.</p>
                            <p class="data-text">${data.depositSum} da dedurre dal nostro conto corrente n. ${data.taxDepositAccount} presso l’IPI.</p>
                            
                            <p class="paragraph-text">Soprattassa per ogni classe supplementare</p>
                            <p class="data-text">${data.additionalSum} da fatturarci.</p>
                            <p class="data-text">${data.additionalSumTax} da dedurre dal nostro conto corrente n. ${data.additionalTaxDepositAccount} presso l’IPI.</p>
                        
                            <!------------ Prducts/services --------------->
                            <h3 class="section-title">6  Lista dei prodotti e/o dei servizi</h3>
                            <p class="paragraph-text">${data.products}</p>
                        
                            <!------------ Brand Category --------------->
                            <h3 class="section-title">7  Categoria di marchio</h3>
                            <p class="paragraph-text">Indicare con una crocetta la categoria che fa al caso.</p>
                            <p class="paragraph-text">${data.brandCategory}</p>

                            <!------------ Claim --------------->
                            <h3 class="section-title">8  Rivendicazione di priorità</h3>
                            <p class="paragraph-text">Secondo la Convenzione di Parigi</p>
                            <p class="paragraph-text">Paese: <span class="data-text">${data.country}</span></p>
                            <p class="paragraph-text">Data del primo deposito: <span class="data-text">${data.depositDate}</span></p>

                            <!------------ Colors --------------->
                            <h3 class="section-title">9  Rivendicazione di colori</h3>
                            <p class="paragraph-text">${data.colors}</p>

                            <!------------ Notes --------------->
                            <h3 class="section-title">10  Osservazioni</h3>
                            <p class="paragraph-text">${data.notes}</p>

                            <!------------ Appendings --------------->
                            <h3 class="section-title">11  Allegati</h3>
                            <p class="paragraph-text">Annexe 1: ${data.appendingFile1}</p>
                            <p class="paragraph-text">Annexe 2: ${data.appendingFile2}</p>
                            <p class="paragraph-text">Annexe 3: ${data.appendingFile3}</p>
                            <p class="paragraph-text">Annexe 4: ${data.appendingFile4}</p>

                        </div>
                    </div>
                </div>

        </body>
    </html>
    `
}