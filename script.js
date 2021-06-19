// set up Game Modes
var Mode_Roll = 'Roll Mode';
var Mode_ChooseOrder = 'Order Mode';


// start with roll mode and P1 
var gameMode = Mode_Roll;
var currentPlayer = '1P';

// create arrays to store dice rolls
var p1Dice = [];
var p2Dice = [];

// keep track of each player's chosen numbers
var p1Num;
var p2Num;

// dice roll function (1-6)
var rollDice = function () {
  return Math.ceil(Math.random() * 6)
};

// function to roll dice 2 times and store in p1Dice/ p2Dice arrays
var get2Rolls = function () {
  var newRolls = [rollDice(), rollDice()];

  if (currentPlayer == '1P') {
    p1Dice = newRolls;
  } else { 
    p2Dice = newRolls;
  }
  return newRolls
};

// function to get player's number depending on order choice
var getPlayerNumber = function(firstNumChoice) {
  // create array for function
  var diceArray = [];
  // start by assuming 1P's turn and set array to p1Dice. Otherwise set to p2Dice
  if (currentPlayer == '1P') {
    diceArray = p1Dice
  } else {
    diceArray = p2Dice
  }

  // creat variable for player's number
  var playerNumber; 
  // firstNumChoice is 1 (i.e. no change) 
  if (firstNumChoice == 1) {
    playerNumber = Number(String(diceArray[0]) + String(diceArray[1]));
  } else {
    playerNumber = Number(String(diceArray[1]) + String(diceArray[0]));
  }
  console.log('player number: ' + playerNumber)


  if (currentPlayer == '1P') {
    p1Num = playerNumber
  } else {
    p2Num = playerNumber
  }

  return playerNumber
};



var main = function (input) {
  // var myOutputValue = 'hello world';
  // return myOutputValue;


  if (gameMode == Mode_Roll) {
    var newRolls = get2Rolls();
    gameMode == Mode_ChooseOrder;
    return `Welcome ${currentPlayer} <br> You rolled 1st Dice: ${newRolls[0]} and 2nd Dice : ${newRolls[0]} <br>
  To move 2nd Dice as the first number, press 2. Otherwise, press 1 to keep current order.`;
}

// To complete


};





