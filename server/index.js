const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const pdfTemplate = require('./documents');

const wkhtmltopdf = require('wkhtmltopdf');
wkhtmltopdf.command = "C:\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe";

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  //accept a file
  if (file.mimetype ===  'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  }
  //reject a file
  console.log("invalid file")
  cb(null, false)
}

// ------------------ Filtering the uploaded files --------------------- //

const upload = multer({storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
})

const app = express();  

const port = process.env.PORT || 5000;

// -------------------- Setting up our Middlewares ---------------------- // 

// ---- Using Cors middleware to enable CORS with various options ------ // 


app.use(cors())

// Using body-parser middelware for parsing req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/uploads', express.static("uploads"))

// POST - PDF Generation and fetching Data
app.post('/proposal', upload.single('brand'), (req, res) => {

    console.log("Creating File ..")

    // if (!req.files) {
    //   return res.status(500).send({ msg: "file is not found" })
    // }

    console.log(req.file);

    console.log(req.body);
  
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

});

app.use(express.static(path.join(__dirname, '..', 'build')));

// GET - Send generated PDF to the client
app.get('/proposal', (req, res) => {
    console.log("Sending back file ...")
    res.download(`${__dirname}/out/proposal.pdf`)
})

app.listen(port, () => console.log(`Listening on port ${port} ...`));
