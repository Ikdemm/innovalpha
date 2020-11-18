module.exports = (data) => {

    switch (data.lang) {

        /* --------------- French Version -------------- */
        case 'fr':
            return `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>Proposal for ${data.applicantFirstName}</title>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
                </head>
                <body>

                    <div class="page-container">

                        <h1> Hello Mr ${data.applicantFirstName} - French</h1>
                        
                    </div>

                </body>
            </html>
            `
            
        /* --------------- German Version -------------- */
        case 'de':
            return `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>Proposal for ${data.applicantFirstName}</title>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
                </head>
                <body>

                    <div class="page-container">

                        <h1> Hello Mr ${data.applicantFirstName} - German</h1>
                        
                    </div>

                </body>
            </html>
            `

        /* --------------- Italien Version -------------- */
        case 'it':
            return `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>Proposal for ${data.applicantFirstName}</title>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
                </head>
                <body>

                    <div class="page-container">

                        <h1> Hello Mr ${data.applicantFirstName} - Italien</h1>
                        
                    </div>

                </body>
            </html>
            `
    }
            
}