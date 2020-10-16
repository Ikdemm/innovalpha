const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
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
    console.log(req.files.brand)

    if (!req.files) {
      return res.status(500).send({ msg: "file is not found" })
    }

    // accessing the file
    const myFile = req.files.brand;

    //  mv() method places the file inside public directory
    myFile.mv(`${__dirname}/uploads/${myFile.name}`, function (err) {
      if (err) {
          console.log(err)
          return res.status(500).send({ msg: "Error occured" });
      }
      // returing the response with file path and name
      return res.send({name: myFile.name, path: `/${myFile.name}`});
  });

    
    // wkhtmltopdf(pdfTemplate(data), {
    //     output: `${__dirname}/proposal.pdf`,
    //     pageSize: 'letter'
    // });
});

// GET - Send generated PDF to the client
app.get('/fetch-proposal', (req, res) => {
    console.log("Sending back file ...")
    res.download(`${__dirname}/proposal.pdf`)
})

// app.get('/', (req, res) => {
//   res.sendFile('C:/Users/RBK/Desktop/Work/upwork/trademarks/client/public/index.html')
// })

app.listen(port, () => console.log(`Listening on port ${port} ...`))
