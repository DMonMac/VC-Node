// Essentials
var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

// Mock 'database'

// Routes
app.get('/', function(req, res){
   res.render("home.pug");
});

app.listen(8080);
