var express = require('express');
var router = express.Router();

var clients = [
  {first_name:"D", last_name:"Mac", email:"dmac@email.com", password:"Thisis@test", bal: 1000000, card_number: 19864523154865},
  {first_name:"Mac", last_name:"D", email:"macd@email.com", password:"Thisis@test2", bal: 9999999, card_number: 86215648962135},
  {first_name:"Fail", last_name:"Being", email:"failbeing@email.com", password:"Thisis@test3", bal: 100, card_number: 34861324657986}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(clients);
});

module.exports = router;
