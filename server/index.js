const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const formidable = require('formidable')
const pdfTemplate = require('./documents');

const wkhtmltopdf = require('wkhtmltopdf');
wkhtmltopdf.command = "C:\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe";

const fileUpload = require('express-fileupload');

const app = express();  

const port = process.env.PORT || 5000;

// Setting up our Middlewares
// Using Cors middleware to enable CORS with various options
app.use(cors())
app.use(fileUpload());

// Using body-parser middelware for parsing req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// POST - PDF Generation and fetching Data
app.post('/create-proposal', (req, res) => {

    console.log("Creating File ..")

    if (!req.files) {
      return res.status(500).send({ msg: "file is not found" })
    }

  
    const brand = req.files.brand;

    // mv() method places the file inside public directory
    brand.mv(`${path.join(__dirname, '..', 'public/brand.jpg')}`, function (err) {
      if (err) {
          console.log(err)
          return res.status(500).send({ msg: "Error occured" });
      }
      console.log("creating the file ...")
      wkhtmltopdf(pdfTemplate(data), {
        output: `${__dirname}/out/proposal.pdf`,
        pageSize: 'letter'
      });

  });

    
    // wkhtmltopdf(pdfTemplate(data), {
    //     output: `${__dirname}/proposal.pdf`,
    //     pageSize: 'letter'
    // });
// });

app.use(express.static(path.join(__dirname, '..', 'public')));

// GET - Send generated PDF to the client
app.get('/fetch-proposal', (req, res) => {
    console.log("Sending back file ...")
    res.download(`${__dirname}/out/proposal.pdf`)
})

app.listen(port, () => console.log(`Listening on port ${port} ...`))
