var express = require('express');
var router = express.Router();

// Database
var mongoose = require('mongoose');
var promise = mongoose.connect('mongodb://localhost/my_db', {
  useMongoClient: true,
});
promise.then(function(db) {
  /* Use `db`, for instance `db.model()`
});
// Or, if you already have a connection
connection.openUri('mongodb://localhost/myapp', { /* options */ });

// Create a schema
var listingSchema = mongoose.Schema({
   name: String
});
var Listing = mongoose.model('Listing', listingSchema);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'List' });
});


router.post('/', function(req, res){
   var listingInfo = req.body; //Get the parsed information

   var newListing = new Listing({
     name: listingInfo.name
   });

   newListing.save(function(Listing){
     res.render('show_message', {
       message: "New list added [index]", type: "success", listing: listingInfo
     });
   });

});

module.exports = router;
