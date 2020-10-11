const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pdfTemplate = require('./documents/index');
const wkhtmltopdf = require('wkhtmltopdf');
wkhtmltopdf.command = "C:\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe";

const multer = require('multer');

const app = express();

const port = process.env.PORT || 5000;

// Setting up our Middlewares
// Using Cors middleware to enable CORS with various options
app.use(cors())

// Using body-parser middelware for parsing req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(fileUpload())

// Setting the storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filesname: function (req, file, cb) {
    cb(null, file.data.originalname)
  }
})

var upload = multer({ storage: storage })

app.post("/file", upload.single('image'), (req, res, next) => {
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
})


// POST - PDF Generation and fetching Data
// app.post('/create-proposal', (req, res) => {

//     console.log("Creating File ..")
//     let data = req.files;

//     // Handling the image uploaded
//     const fileName = data.name;
//     // const extension = fileName.substr(fileName.length - 4)
//     const path = __dirname + '/images/brand/' + data.filename;
    
//     fs.mv(path, (err) => {
//         if (error) {
//             console.error(error)
//             res.writeHead(500, {
//               'Content-Type': 'application/json'
//             })
//             res.end(JSON.stringify({ status: 'error', message: error }))
//             return
//           }
      
//           res.writeHead(200, {
//             'Content-Type': 'application/json'
//           })
//           res.end(JSON.stringify({ status: 'success', path: '/img/brands/' + fileName }))
//         })
    
    
//     // wkhtmltopdf(pdfTemplate(data), {
//     //     output: `${__dirname}/proposal.pdf`,
//     //     pageSize: 'letter'
//     // });
// });

// GET - Send generated PDF to the client
app.get('/fetch-proposal', (req, res) => {
    console.log("Sending back file ...")
    res.download(`${__dirname}/proposal.pdf`)
})

// app.get('/', (req, res) => {
//   res.sendFile('C:/Users/RBK/Desktop/Work/upwork/trademarks/client/public/index.html')
// })

app.listen(port, () => console.log(`Listening on port ${port} ...`))
