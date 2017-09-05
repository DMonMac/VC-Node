// Essentials
// Express
var express = require('express');
var app = express();

// Parser
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

// Set view engine and folder
app.set('view engine', 'pug');
app.set('views','./views');

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(upload.array());


// Mock 'client database'
var clients = [
  {first_name:"D", last_name:"Mac", email:"dmac@email.com", password:"Thisis@test", bal: 1000000},
  {first_name:"Mac", last_name:"D", email:"macd@email.com", password:"Thisis@test2", bal: 9999999},
  {first_name:"Fail", last_name:"Being", email:"failbeing@email.com", password:"Thisis@test3", bal: 100}
];


// Routes
app.get('/', function(req, res){
   res.render("home.pug");
});


// POST actions
app.post('/', function(req, res){
   console.log(req.body);
   res.send("Received input :)");
});


// In browser, type 'http://localhost:8080'
app.listen(8080);
