var express = require('express');
var router = express.Router();

// Mock Database
var clients = [
  {first_name:"D", last_name:"Mac", email:"dmac@email.com", password:"Thisis@test", bal: 1000000, card_number: 19864523154865},
  {first_name:"Mac", last_name:"D", email:"macd@email.com", password:"Thisis@test2", bal: 9999999, card_number: 86215648962135},
  {first_name:"Fail", last_name:"Being", email:"failbeing@email.com", password:"Thisis@test3", bal: 100, card_number: 34861324657986}
];

function checkSignIn(req, res, next){
   if(req.session.client){
      next();     //If session exists, proceed to page
   } else {
      var err = new Error("Not logged in!");
      console.log(req.session.client);
      next(err);  //Error, trying to access unauthorized page!
   }
}

router.get('/:card_number([0-9]{14,})', checkSignIn, function(req, res){
   res.render('client_page', {
     card_number: req.session.client.card_number,
     first_name: req.session.client.first_name,
     last_name: req.session.client.last_name,
     bal: req.session.client.bal})
});


/* GET users listing. */
router.get('/', function(req, res) {
  res.json(clients);
});

router.post('/', function(req, res) {
  console.log(clients);
  console.log(req.body);
  clients.map(function(){
    for(var i=0; i<clients.length; i++){
      if (clients[i].card_number == req.body.card_number && clients[i].password == req.body.password){
        req.session.client = clients[i];
        res.redirect('/clients/' + clients[i].card_number);
      };
    };

    res.json({message: 'Invalid details.'});
  });
});










router.use('/:card_number([0-9]{14,})', function(err, req, res, next){
console.log(err);
   //User should be authenticated! Redirect him to log in.
   res.redirect('/');
});


//router.get('/:card_number([0-9]{14,})', function(req, res){
//  var currClient = clients.filter(function(client){
//    if(client.card_number == req.params.card_number){
//      return true;
//    }
//  });
//  if(currClient.length == 1){
//    res.render('client_page').json(currClient[0])
//  } else {
//      res.status(404); // Set status to 404 as client was not found
//      res.json({message: "Client not found."});
//    }
//});


module.exports = router;
