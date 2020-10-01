const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pdfTemplate = require('./documents/index');
const wkhtmltopdf = require('wkhtmltopdf');
wkhtmltopdf.command = "C:\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe";

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

    console.log("Creating File ..")
    let data = req.body;
    wkhtmltopdf(pdfTemplate(data), {
        output: `${__dirname}/proposal.pdf`,
        pageSize: 'letter'
    });
    res.end();
});

// GET - Send generated PDF to the client
app.get('/fetch-proposal', (req, res) => {
    console.log("Sending back file ...")
    res.download(`${__dirname}/proposal.pdf`)
})

app.listen(port, () => console.log(`Listening on port ${port} ...`))
