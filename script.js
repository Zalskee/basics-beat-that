// set up Game Modes
var Mode_Roll = 'Roll Mode';
var Mode_ChooseOrder = 'Order Mode';


// start with roll mode and P1 
var gameMode = Mode_Roll;
var currentPlayer = 1;

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

  if (currentPlayer == 1) {
    p1Dice = newRolls;
  } else { 
    p2Dice = newRolls;
  }
  return newRolls
};

// function to get player's number depending on combination choice
var getPlayerNumber = function(combiChoice) {
  // create array for function
  var diceArray = [];
  // start by assuming 1P's turn and set array to p1Dice. Otherwise set to p2Dice
  if (currentPlayer == 1) {
    diceArray = p1Dice
  } else {
    diceArray = p2Dice
  }

  // creat variable for player's number
  var playerNumber; 
  // combiChoice (1) is default 1-2 sequence. combiChoice (2) is 2-1 sequence.
  if (combiChoice == 1) {
    playerNumber = Number(String(diceArray[0]) + String(diceArray[1]));
  } else {
    playerNumber = Number(String(diceArray[1]) + String(diceArray[0]));
  }
  console.log('player number: ' + playerNumber)

  if (currentPlayer == 1) {
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
    return `Welcome Player ${currentPlayer} <br> You rolled 1st Dice: ${newRolls[0]} and 2nd Dice : ${newRolls[0]} <br>
  Please enter (1) for dice 1-2 combination or (2) for dice 2-1 combination.`;
  }

  if (gameMode == Mode_ChooseOrder) {
    var combiChoice = Number(input);
    var playerNumber = getPlayerNumber(combiChoice);
    var printOrderMessage = `Player ${currentPlayer}, You chose combination ${combiChoice}. <br> Your number is ${playerNumber}.`;
  }

  // change to player 2

  if (currentPlayer == 1) {
    currentPlayer == 2;
    gameMode = Mode_Roll;
    return `${printOrderMessage} <br> It is now Player 2's turn. Press submit to roll Player 2's dice.`;
  }

  if (p1Num < p2Num) {
    return `Player 2's number is ${p2Num}. Player 1's number is ${p1Num}. Player 2 won!`
  }; 
  if (p2Num < p1Num) {
    return `Player 1's number is ${p1Num}. Player 2's number is ${p2Num}. Player 1 won!`
  }; 
  

};





