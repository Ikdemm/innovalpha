const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

// Data Manipulation
const dataManipulators = require('./helpers')

// PDF Generators
const englishPDFTemplate = require('./documents/english-template');
const frenchPDFTemplate = require('./documents/french-template');
const italienPDFTemplate = require('./documents/italien-template');
const germanPDFTemplate = require('./documents/german-template');

const wkhtmltopdf = require('wkhtmltopdf');
wkhtmltopdf.command = "C:\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe";

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function(req, file, cb) {
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname));
  }
})

const fileFilter = (req, file, cb) => {
  //accept a file
  if (file.mimetype ===  'image/jpeg' || file.mimetype ===  'image/jpg' || file.mimetype === 'image/png') {
    cb(null, true)
  }
  //reject a file
  console.log("invalid file")
  cb(null, false)
}

// ------------------ Filtering the uploaded files --------------------- //

const upload = multer({storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10
  },
  // fileFilter: fileFilter
})

const app = express();  

// -------------------- Setting up our Middlewares ---------------------- // 

// ----- Using Cors middleware to enable CORS with various options ------ // 

app.use(cors())

// --------- Using body-parser middelware for parsing req.body ---------- // 

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// -------------------- Serving Static Files --------------------------- // 

app.use('/uploads', express.static("uploads"))


// ---------------------- Handling Requests ---------------------------- // 

// POST - PDF Generation and fetching Data

app.post('/proposal', upload.any('files', 6), (req, res) => {

    console.log("Deleting existing proposal ..")
    
    fs.unlink(`${__dirname}/out/proposal.pdf`, () => {
      
      var data = JSON.parse(req.body.data);

      console.log(req.body)

      console.log("data we get from the frontend", data)

      const files = req.files;

      /*----------- Storing files in the data form --------------*/

      files.map((file) => {
        data[file.fieldName] = file.path;
      })

      /*---------- Preparing Data for output ---------------*/

      data.contactEmail = dataManipulators.checkEmail(data)
      data.brandType = dataManipulators.getBrandType(data)
      data.brandCategory = dataManipulators.getBrandCategory(data)
      // data = dataManipulators.getFiles(data);

      console.log("creating the file ... for this language: ", req.body.lang)
    
      switch (data.lang) {
        case 'en':
          wkhtmltopdf(englishPDFTemplate(data), {
            output: `${__dirname}/out/proposal.pdf`,
            pageSize: 'letter'
          })
          break;

        case 'fr':
          wkhtmltopdf(frenchPDFTemplate(data), {
            output: `${__dirname}/out/proposal.pdf`,
            pageSize: 'letter'
          })
          break;

        case 'it':
          wkhtmltopdf(italienPDFTemplate(data), {
            output: `${__dirname}/out/proposal.pdf`,
            pageSize: 'letter'
          })
          break;

        case 'de':
          wkhtmltopdf(germanPDFTemplate(data), {
            output: `${__dirname}/out/proposal.pdf`,
            pageSize: 'letter'
          })
          break;
      }

      res.status(200).send({ msg: "File Created" })
      
    })
  });

// GET - Send generated PDF to the client
app.get('/proposal', (req, res) => {
    console.log("Sending back file ...")
    setTimeout( () => res.download(`${__dirname}/out/proposal.pdf`), 2000)
})

// Handles any requests that don't match the ones above
// app.use(express.static(path.join(__dirname, 'client/build')));

// if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  })
// }

// build mode

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
 
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/public/index.html'));
// })

// const root = require('path').join(__dirname, 'client', 'build')
// app.use(express.static(root));
// app.get("/", (req, res) => {
//     res.sendFile('index.html', { root });
// })

const port = process.env.PORT || 5000;
app.listen(port, () => {console.log(`Listening on port ${port} ...`)});
