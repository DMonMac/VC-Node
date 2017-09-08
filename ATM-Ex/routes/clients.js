var express = require('express');
var router = express.Router();

var clients = [
  {first_name:"D", last_name:"Mac", email:"dmac@email.com", password:"Thisis@test", bal: 1000000, card_number: 19864523154865},
  {first_name:"Mac", last_name:"D", email:"macd@email.com", password:"Thisis@test2", bal: 9999999, card_number: 86215648962135},
  {first_name:"Fail", last_name:"Being", email:"failbeing@email.com", password:"Thisis@test3", bal: 100, card_number: 34861324657986}
];

/* GET users listing. */
router.get('/', function(req, res) {
  res.json(clients);
});

router.post('/', function(req, res) {
  console.log(clients);
  console.log(req.body);
  clients.map(function(){
    for (var i=0; i<clients.length; i++){
      if (clients[i].card_number == req.body.card_number && clients[i].password == req.body.password){
        res.redirect('/clients/'+req.body.card_number);
      }
    };
    res.send('Invalid details.');
  });
});





router.get('/:card_number([0-9]{14,})', function(req, res){
  var currClient = clients.filter(function(client){
    if(client.card_number == req.params.card_number){
      return true;
    }
  });
  if(currClient.length == 1){
    res.json(currClient[0])
  } else {
      res.status(404); // Set status to 404 as client was not found
      res.json({message: "Client not found."});
    }
});


module.exports = router;
