var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();


app.set('view engine', 'pug');
app.set('views','./views');


app.get('/', function(req, res){
  res.render('home');
});


app.get('/form', function(req, res){
  res.render('form');
});

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

app.post('/', function(req, res){
   console.log(req.body);
   res.send("recieved your request!");
});



// Just gonna comment these out coz they still hold valuable info
//app.get('/first_template', function(req, res){
//   res.render('first_view');
//});

//app.get('/dynamic_view', function(req, res){
//   res.render('dynamic', {
//      name: "Tutorials Point",
//      url:"http://www.tutorialspoint.com"
//   });
//});

//app.get('/components', function(req, res){
//  res.render('content');
//});

//app.use('/static', express.static('public'));
//app.use(express.static('images'));

app.listen(3000);
