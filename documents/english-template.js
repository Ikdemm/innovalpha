module.exports = (data) => {
    
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Proposal for ${data.applicantFirstName} ${data.applicantLastName}</title>        
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

                        <h1 class="title">Registration of a Swiss trademark</h1>
                        <p class="paragraph-text">
                            <b>&bull;</b> The brochure "Filing a trademark" contains information on the filing formalities and how to complete this form
                        </p>
                        <p class="paragraph-text">
                            <b>&bull; Caution:</b> During the registration process, we do not examine any possible trademark infringements or
                            business reasons already registered. This is why we strongly advise you to have a professional research done
                            prior art of similar and identical brands as well as companies. Further information on www.ipi.ch. We you
                            furthermore recommend seeking the support of a trademark advisor (www.ipi.ch/conseils-marques).
                        </p>
                        <p class="paragraph-text">
                            <b>&bull; Digital filing of a trademark via the Internet: https://e-trademark.ige.ch</b>
                        </p>
                        
                        <div class="form-container">
                            <h3 class="section-title">1  Depositor/h3>
                            <p class="paragraph-text">First name, surname, company name, address, postal code, town</p>
                            <p class="data-text">
                            ${data.applicantFirstName},
                            ${data.applicantLastName}, 
                            ${data.applicantSocialReason}, 
                            ${data.applicantAddress}, 
                            ${data.applicantPostCode},
                            ${data.applicantLocation}
                            </p>
                    
                    
                            <!------------ Mandataire --------------->
                            <h3 class="section-title">2  Representative</h3>
                            <p class="paragraph-text">First name, surname, company name, address, postal code, town</p>
                            <p class="data-text">
                            ${data.agentFirstName},
                            ${data.agentLastName}, 
                            ${data.agentSocialReason}, 
                            ${data.agentAddress}, 
                            ${data.agentPostCode},
                            ${data.agentLocation}
                            </p>
                    
                            <!------------ Contact --------------->
                            <h3 class="section-title">3a  Contact Person</h3>
                            <p class="paragraph-text">First name, surname, phone number</p>
                            <p class="data-text">
                            ${data.contactFirstName},
                            ${data.contactLastName}, 
                            ${data.contactPhone}
                            </p>
        
                            <h3 class="section-title">3b  Reference number, file</h3>
                            <p class="data-text">${data.appNumber}</p>
        
                            <h3 class="section-title">3c  Digital communication</h3>
                            <br>
                            <label for="communication" class="paragraph-text">
                                In this procedure, I wish to receive the writings of the IPI electronically
                                to the following address*:
                            </label>
                            <p class="data-text">${data.contactEmail}</p>
                            <p class="paragraph-text">* The address indicated must be registered on a recognized messaging platform for the electronic transmission of documents as part of an administrative procedure
                                federal. For more information: www.ipi.ch/communication-electronique.
                            </p>


                            <!------------ Marque --------------->
                            <h3 class="section-title">4  Brand</h3>
                            <p class="paragraph-text">
                                If it is a brand with
                                a particular font
                                or involving graphics
                                In particular, please file a black and white reproduction (to be inserted or pasted opposite). Areas
                                gray should appear distinctly. For brands in color (s)
                                (see ch. 9 colors claimed),
                                please file a reproduction in
                                colors).
                            </p>
                            <p class="paragraph-text">
                                <b>
                                    Maximum dimensions of the
                                    reproduction: 80 × 80 mm.   
                                </b>
                            </p>
                            <p class="data-text">${data.brandType}</p>

                            <!------------ Taxes --------------->
                            <h3 class="section-title">5  Taxes</h3>

                            <p class="paragraph-text">Deposit taxes</p>
                            <p class="data-text">${data.depositTax} to bill us</p>
                            <p class="data-text">${data.depositSum} to be debited from our current account no. ${data.taxDepositAccount}</p>
                            
                            <p class="paragraph-text">Surcharges for additional class</p>
                            <p class="data-text">${data.additionalSum} to bill us</p>
                            <p class="data-text">${data.additionalSumTax} to be debited from our current account no. ${data.additionalTaxDepositAccount}</p>
                        
                            <!------------ Prducts/services --------------->
                            <h3 class="section-title">6  Products</h3>
                            <p class="paragraph-text">${data.products}</p>
                        
                            <!------------ Brand Category --------------->
                            <h3 class="section-title">7  Brand Category</h3>
                            <p class="paragraph-text">${data.brandCategory}</p>

                            <!------------ Claim --------------->
                            <h3 class="section-title">8  Priority claim</h3>
                            <p class="paragraph-text">According to the Paris Union convention</p>
                            <p class="paragraph-text">Country: <span class="data-text">${data.country}</span></p>
                            <p class="paragraph-text">Date of first deposit: <span class="data-text">${data.depositDate}</span></p>

                            <!------------ Colors --------------->
                            <h3 class="section-title">9  Color(s) claimed</h3>
                            <p class="paragraph-text">${data.colors}</p>

                            <!------------ Notes --------------->
                            <h3 class="section-title">10  Notes</h3>
                            <p class="paragraph-text">${data.notes}</p>

                            <!------------ Appendings --------------->
                            <h3 class="section-title">11  Appendings</h3>
                            <p class="paragraph-text">Appending 1: ${data.appendingFile1}</p>
                            <p class="paragraph-text">Appending 2: ${data.appendingFile2}</p>
                            <p class="paragraph-text">Appending 3: ${data.appendingFile3}</p>
                            <p class="paragraph-text">Appending 4: ${data.appendingFile4}</p>

                        </div>
                    </div>
                </div>

        </body>
    </html>
    `
}