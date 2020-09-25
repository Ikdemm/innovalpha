const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pdfTemplate = require('./documents');
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
    console.log(req.body)
    wkhtmltopdf('./documents/index.html', {
        output: 'out.pdf',
        pageSize: 'A4'
    })
});

app.get('/test', (req, res) => {
    console.log("Got the request")
    wkhtmltopdf('<h1>Test</h1><p>Hello world</p>', {
        output: 'demo.pdf',
        pageSize: 'letter'
    });
})

// GET - Send generated PDF to the client
app.get('/fetch-proposal', (req, res) => {
    res.sendFile(`${__dirname}/proposal.pdf`)
})

app.listen(port, () => console.log(`Listening on port ${port} ...`))
