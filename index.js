const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mv = require('mv');
const fs = require('fs');

// Data Manipulation
const dataManipulators = require('./helpers')

// PDF Generators
const pdfTemplate = require('./documents/french-template');

const wkhtmltopdf = require('wkhtmltopdf');
wkhtmltopdf.command = "C:\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe";

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './server/uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
})

// const fileFilter = (req, file, cb) => {
//   //accept a file
//   if (file.mimetype ===  'image/jpeg' || file.mimetype ===  'image/jpg' || file.mimetype === 'image/png') {
//     cb(null, true)
//   }
//   //reject a file
//   console.log("invalid file")
//   cb(null, false)
// }

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

      console.log("data we get from the frontend", data)

      const files = req.files;

      /*----------- Storing files in the data form --------------*/

      // files.map((file) => {
      //   data[file.fieldName] = file.path;
      // })

      /*---------- Preparing Data for output ---------------*/

      data.contactEmail = dataManipulators.checkEmail(data)
      data.brandType = dataManipulators.getBrandType(data)
      data.brandCategory = dataManipulators.getBrandCategory(data)
      // data = dataManipulators.getFiles(data);
      
      console.log("the final version of the data", data)
    
      // const brand = req.files[0];

      // mv() method places the file inside public directory
      // mv(path.join(__dirname, `/uploads/${brand.originalname}`), path.join(__dirname, '..', 'public/brand.jpg'), (err) => {
      //   if (err) {
      //       console.log(err)
      //       return res.status(500).send({ msg: "Error occured" });
      //   }

      console.log("creating the file ...")
    
      wkhtmltopdf(pdfTemplate(data), {
        output: `${__dirname}/out/proposal.pdf`,
        pageSize: 'letter'
      })

      res.status(200).send({ msg: "File Created" })
      
    })
  });

// });

// GET - Send generated PDF to the client
app.get('/proposal', (req, res) => {
    console.log("Sending back file ...")
    setTimeout( () => res.download(`${__dirname}/out/proposal.pdf`), 2000)
})

// Handles any requests that don't match the ones above
app.use(express.static(path.join(__dirname, 'client/build')));

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  })
}
//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})

// const root = require('path').join(__dirname, 'client', 'build')
// app.use(express.static(root));
// app.get("/", (req, res) => {
//     res.sendFile('index.html', { root });
// })

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
