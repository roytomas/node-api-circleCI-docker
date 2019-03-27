const express = require('express');
const cors = require('cors');
const passwordHash = require('password-hash');
const CryptoJS = require("crypto-js");
const alert = require('alert-node');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
// const dbService = require('./apps/service/DBService');
const db = require("./apps/models");
const bannerService = require("./apps/service/bannerService");
const linkstaffadService = require("./apps/service/linkstaffadService");
const linkshareadService = require("./apps/service/linkshareadService");
const hospitaladService = require("./apps/service/hospitaladService");
const app = express();
var path  = require("path");
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

bannerService(app,db);
linkstaffadService(app,db);
linkshareadService(app,db);
hospitaladService(app,db);

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname+'/apps/template/home.html'));
});

app.get('/advertisement', (req, res) => {
    
    try {  
       var data = fs.readFileSync(path.join(__dirname+'/apps/template/advertise.html'), 'utf8');
       //console.log(data); 
       return res.json({ data: data, message: "Successfull", status: "OK", code: 200 });   
    } catch(e) {
       return res.send({ data: null, message: "Internal server error", status: "ERROR", code: 500});
    }
});
app.get('/video', function(req, res) {
    const path = 'apps/assets/video/Barcelona-HD.mp4'
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range
  
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-")
      const start = parseInt(parts[0], 10)
      const end = parts[1]
        ? parseInt(parts[1], 40)
        : fileSize-1
  
      const chunksize = (end-start)+1
      const file = fs.createReadStream(path, {start, end})
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      }
  
      res.writeHead(206, head)
      file.pipe(res)
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      }
      res.writeHead(200, head)
      fs.createReadStream(path).pipe(res)
    }
  })
// app.get('/user/add', (req, res) => {
//     let user = new userModel();
//     let database = new sqlService();
//     user = req.query;
//     // Encrypt
//     var hashedPassword = CryptoJS.AES.encrypt(user.password, config.secretKey);
//     user.password = hashedPassword.toString();
//     var queryB = userService.addNewUser(user)
//     database.query(queryB)
//     .then(results => {           
//         res.send("New user added successfully");
//     })
//     .then(results => {
//         return database.close();
//     }, err => {
//         return database.close().then(() => { res.send({ data: null, message: "Internal server error", status: "ERROR", code: 500}); })
//     })
//     .catch(err => {
//         return res.send({ data: null, message: "Internal server error", status: "ERROR", code: 500});
//     });
// });
// app.post('/users', verifyToken, (req, res) => {
//     jwt.verify(req.token, config.apiSecretKey, (err, authData) => {
//         if (err) {
//             res.sendStatus(403);
//         } else {
//             res.json({ message: "sucessfull", authData });
//         }
//     })
// });

    
// app.get('/user', (req, res) => {
//     let database = new sqlService();
//     let { email, password } = req.query; 
//     var queryB = userService.getUserByID(req.query)
   
//     database.query(queryB)
//         .then(results => {           
//             if (results !== null && results.length > 0) {              
//             var user = new userModel();
//             user.name = results[0].name;
//             user.email = results[0].email;
//             var bytes = CryptoJS.AES.decrypt(results[0].password, config.secretKey);
//             var plaintext = bytes.toString(CryptoJS.enc.Utf8);
//             if (plaintext.trim() === password.trim()) {
//                     user.isLoggedIn = true;
//                     jwt.sign({ user }, config.apiSecretKey, (err, token) => {
//                         if (err) {
//                             return res.send(err);
//                         } else {
//                             user.accessToken = token;
//                             return res.json({ data: user, message: "Logged in successfully", status: "OK", code: 200 });
//                         }

//                     });
//                 }
//                 else
//                     return res.json({ data: null, message: "Username/password invalid", status: "Invalid", code: 500 })
//             } else {
//                 return res.json({ data: null, message: "User not found", status: "NotFound", code: 404 });
//             }
//         })
//         .then(results => {
//             return database.close();
//         }, err => {
//             return database.close().then(() => { return res.send({ data: null, message: "Internal server error", status: "ERROR", code: 500}); })
//         })
//         .catch(err => {
//             return res.send({ data: null, message: "Internal server error", status: "ERROR", code: 500});
//         });
// });

//verify token
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        //split at the space
        const bearer = bearerHeader.split(' ');
        // get token from array
        const bearerToken = bearer[1];
        //set the token
        req.token = bearerToken;
        //next middle ware
        next();
    } else {
        res.sendStatus(403)
    }
}

var server = app.listen(port, () => {
    console.log("Server listening on port "+ port + "...")
});

module.exports = server;