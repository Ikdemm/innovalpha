module.exports = (data) => {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Proposal</title>
        </head>
        <body>
            <h2>Hello ${data.applicantFirstName}</h2>
            <p>Some text here</p>
        </body>
    </html>
    `
}