module.exports = (data) => {
    
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Vorschlag für ${data.applicantFirstName} ${data.applicantLastName}</title>        
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

                        <h1 class="title">Eintragung einer schweizerischen Marke</h1>
                        <p class="paragraph-text">
                            <b>&bull;</b> Die Broschüre «Markenhinterlegung» gibt Auskunft über die Hinterlegungsformalitäten und das Ausfüllen dieses Formulars.
                        </p>
                        <p class="paragraph-text">
                            <b>&bull; WICHTIG:</b>  Im Eintragungsverfahren werden mögliche Verletzungen älterer Marken und Firmenrechte nicht geprüft. Das
                            Durchführen einer Recherche nach älteren identischen und ähnlichen Marken sowie Firmen ist deshalb unbedingt zu empfehlen. Weitere Informationen dazu finden Sie auf www.ige.ch. Zudem empfehlen wir den Beizug eines Markenberaters
                            (www.ige.ch/ma-berater).
                        </p>
                        <p class="paragraph-text">
                            <b>Eine Marke kann auch via Internet (https://e-trademark.ige.ch) zur Eintragung angemeldet werden.</b>
                        </p>
                        
                        <div class="form-container">
                            <h3 class="section-title">1  Markenhinterleger/in</h3>
                            <p class="paragraph-text">Vorname, Name bzw. Firma, Adresse, PLZ/Ort</p>
                            <p class="data-text">
                                ${data.applicantFirstName},
                                ${data.applicantLastName}, 
                                ${data.applicantSocialReason}, 
                                ${data.applicantAddress}, 
                                ${data.applicantPostCode},
                                ${data.applicantLocation}
                            </p>
                    
                    
                            <!------------ Vertreter/in --------------->
                            <h3 class="section-title">2  Vertreter/in</h3>
                            <p class="paragraph-text">Vorname, Name bzw. Firma, Adresse, PLZ/Ort</p>
                            <p class="data-text">
                                ${data.agentFirstName},
                                ${data.agentLastName}, 
                                ${data.agentSocialReason}, 
                                ${data.agentAddress}, 
                                ${data.agentPostCode},
                                ${data.agentLocation}
                            </p>
                    
                            <!------------ Kontakt --------------->
                            <h3 class="section-title">3a  Kontaktperson</h3>
                            <p class="paragraph-text">Vorname, Name, Telefon</p>
                            <p class="data-text">
                                ${data.contactFirstName},
                                ${data.contactLastName}, 
                                ${data.contactPhone}
                            </p>
        
                            <h3 class="section-title">3b  Referenznummer, Dossier</h3>
                            <p class="data-text">${data.appNumber}</p>
        
                            <h3 class="section-title">3c  Elektronische Übermittlung</h3>
                            <br>
                            <label for="communication" class="paragraph-text">
                                Ich wünsche in diesem Verfahren eine elektronische Übermittlung der IGE-Schreiben an die hier
                                aufgeführte E-Mail-Adresse*:
                            </label>
                            <p class="data-text">${data.contactEmail}</p>
                            <p class="paragraph-text">*  Die angegebene E-Mail-Adresse muss für den schweizerischen Behördenverkehr auf einer
                            anerkannten Zustellplattform eingetragen sein. Mehr erfahren unter www.ige.ch/e-uebermittlung.
                            </p>


                            <!------------ Marke --------------->
                            <h3 class="section-title">4  Marke</h3>
                            <p class="paragraph-text">
                                Bei einer Marke mit besonderer
                                Schriftgestaltung oder besonderer
                                grafischer Gestaltung ist eine
                                schwarz-weisse Abbildung einzureichen (im Feld rechts einfügen
                                oder aufkleben). Verschiedene
                                Grautöne müssen klar ersichtlich
                                sein. Für Marken in Farbe (Farbanspruch Ziff. 9) ist eine farbige
                                Abbildung einzureichen.
                            </p>
                            <p class="paragraph-text">
                                <b>
                                    Maximale Grösse der Abbildungen: 80 × 80 mm.   
                                </b>
                            </p>
                            <p class="data-text">${data.brandType}</p>

                            <!------------ Gebühren --------------->
                            <h3 class="section-title">5  Gebühren</h3>

                            <p class="paragraph-text">Hinterlegungsgebühr</p>
                            <p class="data-text">${data.depositTax} ist uns in Rechnung zu stellen.</p>
                            <p class="data-text">${data.depositSum} ist unserem Kontokorrent Nr. ${data.taxDepositAccount} beim IGE zu belasten.</p>
                            
                            <p class="paragraph-text">Klassenzuschlag</p>
                            <p class="data-text">${data.additionalSum} ist uns in Rechnung zu stellen.</p>
                            <p class="data-text">${data.additionalSumTax} ist unserem Kontokorrent Nr ${data.additionalTaxDepositAccount} beim IGE zu belasten.</p>
                        
                            <!------------ Prducts/services --------------->
                            <h3 class="section-title">6  Verzeichnis der Waren und/oder Dienstleistungen (WDL)</h3>
                            <p class="paragraph-text">${data.products}</p>
                        
                            <!------------ Brand Category --------------->
                            <h3 class="section-title">7  Markenart</h3>
                            <p class="paragraph-text">${data.brandCategory}</p>

                            <!------------ Claim --------------->
                            <h3 class="section-title">8  Prioritätsanspruch</h3>
                            <p class="paragraph-text">Gemäss Pariser Verbandsübereinkunft</p>
                            <p class="paragraph-text">Land: <span class="data-text">${data.country}</span></p>
                            <p class="paragraph-text">Datum der Ersthinterlegung: <span class="data-text">${data.depositDate}</span></p>

                            <!------------ Colors --------------->
                            <h3 class="section-title">9  Farbanspruch</h3>
                            <p class="paragraph-text">${data.colors}</p>

                            <!------------ Notes --------------->
                            <h3 class="section-title">10  Bemerkungen</h3>
                            <p class="paragraph-text">${data.notes}</p>

                            <!------------ Appendings --------------->
                            <h3 class="section-title">11  Beilagen</h3>
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