var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ATM APP' });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  res.send("Received request...");
});

/* GET client page. */
router.get('/client', function(req, res, next) {
  res.render('client_page', { title: 'Client Page' });
});

router.post('/client', function(req, res, next) {
  console.log(req.body);
  res.send("Received request...");
});

module.exports = router;
