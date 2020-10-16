const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
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

    if (!req.files) {
      return res.status(500).send({ msg: "file is not found" })
    }

    // accessing the file
    const data = req.body;
    const brand = req.files.brand;

    //  mv() method places the file inside public directory
    brand.mv(`${path.join(__dirname, '..', 'public/brand.jpg')}`, function (err) {
      if (err) {
          console.log(err)
          return res.status(500).send({ msg: "Error occured" });
      }
      console.log("creating the file ...")
      wkhtmltopdf(`<img src="http://127.0.0.1:5000/brand.jpg" width="500px" height="500px">`, {
        output: `${__dirname}/out/proposal.pdf`,
        pageSize: 'letter'
      });
      // returing the response with file path and name
      res.send("done")
      // return res.send({name: brand.name, path: `/${brand.name}`});
  });

    
    // wkhtmltopdf(pdfTemplate(data), {
    //     output: `${__dirname}/proposal.pdf`,
    //     pageSize: 'letter'
    // });
});

app.use(express.static(path.join(__dirname, '..', 'public')));

// GET - Send generated PDF to the client
app.get('/fetch-proposal', (req, res) => {
    console.log("Sending back file ...")
    res.download(`${__dirname}/proposal.pdf`)
})

// app.get('/', (req, res) => {
//   res.sendFile('C:/Users/RBK/Desktop/Work/upwork/trademarks/client/public/index.html')
// })

app.listen(port, () => console.log(`Listening on port ${port} ...`))
