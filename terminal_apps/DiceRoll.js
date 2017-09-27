//Dice Game
//Rolls dice randonmly
//Displays number

  var prompt = require('prompt');
  prompt.start();

  prompt.get(['user_roll_input'], function (err, result) {

   // Display how many rolls the user wants.
   console.log('Rolls: ' + result.user_roll_input);

   var numbers = [1, 2, 3, 4, 5, 6]

   // Rolls dice times the number of user_input
   for(i=0; i<result.user_roll_input; i++){
     var roll_result = numbers[Math.floor(Math.random()*numbers.length)]
     console.log('Rolling dice '+(i+1)+'...')
     console.log(roll_result)
   }
 });
