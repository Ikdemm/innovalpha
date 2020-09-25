const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const pdfTemplate = require('./documents');

const app = express();

const port = process.env.PORT || 5000;

// Setting up our Middlewares
// Using Cors middleware to enable CORS with various options
app.use(cors())

// Using body-parser middelware for parsing req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// POST - PDF Generation and fetching Data
app.post('/create-proposal', (req, res) => {
    console.log(req.body)
    pdf.create(pdfTemplate(req.body.applicantFirstName), {})
    .toFile('proposal.pdf', err => {
        if (err) {
            return Promise.reject();
        }
        return Promise.resolve();
    })
})

// GET - Send generated PDF to the client
app.get('/fetch-proposal', (req, res) => {
    res.sendFile(`${__dirname}/proposal.pdf`)
})

app.listen(port, () => console.log(`Listening on port ${port} ...`))
