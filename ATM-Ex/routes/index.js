var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ATM APP' });
});



router.get('/log-out', function(req, res){
   req.session.destroy(function(){
      console.log("client logged out.")
   });
   res.redirect('/');
});
module.exports = router;
