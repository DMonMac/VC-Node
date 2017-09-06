// Essentials
// Express
var express = require('express');
var app = express();

// Form Parsers
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
// for parsing application/xwww-form-urlencoded:
//Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }));

//Sessions
var cookieParser = require('cookie-parser');
app.use(cookieParser());
var session = require('express-session');
app.use(session({secret: "Your secret key"}));


// Set view engine and folder
app.set('view engine', 'pug');
app.set('views','./views');


// Mock 'client database'
var clients = [
  {first_name:"D", last_name:"Mac", email:"dmac@email.com", password:"Thisis@test", bal: 1000000, id: 1},
  {first_name:"Mac", last_name:"D", email:"macd@email.com", password:"Thisis@test2", bal: 9999999, id: 2},
  {first_name:"Fail", last_name:"Being", email:"failbeing@email.com", password:"Thisis@test3", bal: 100, id: 3}
];


// Routes
app.get('/', function(req, res, next){
  res.render('home');
  console.log('Displaying Home Page');
});


function checkClient(req, res){
   if(req.session.client) {
      next();     //If session exists, proceed to page
   } else {
      var err = new Error("Not logged in!");
      console.log(req.session.client);
      next(err);  //Error, trying to access unauthorized page!
   }
 }

app.get('/client', checkClient, function(req, res){
  res.render('client_page', {id: req.session.client.id});
});

app.get('/log_in', function(req, res){
  res.render('log_in');
});

app.get('/logout', function(req, res){
   req.session.destroy(function(){
      console.log("Client logged out.")
   });
   res.redirect('/log_in');
});

// POST actions
app.post('/log_in', function(req, res){
  var client_email = req.body.email;
  var password = req.body.password;
  console.log('Email: ${client_email}, Password: ${password}');
  clients.map()
  if (!req.body.email || !req.body.password) {
    res.render('log_in'), {message: "Please enter email and password"};
  } else {
      clients.filter(function(client){
        for (var i=0; i<clients.length; i++){
          if (client.email == req.body.email && client.password == req.body.password) {
            req.session.client = client;
            res.redirect('/client');
          };
        };
        res.render('log_in', {message: "Not an account!"});
      });
    };
});



app.use('/client', function(err, req, res, next){
  console.log(err);
  //Client should be authenticated! Redirect to log in.
   res.redirect('/log_in');
});


// In browser, type 'http://localhost:8080'
app.listen(8080);
