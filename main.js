//  0. Variables
let cChoice, pChoice;
//  I. we should make computerChoice() which tells the computer return a a random value between 'rock', 'paper' and 'scissors'.

function computerChoice() {
  const RPS = ["rock", "paper", "scissors"];
  cChoice = RPS[(Math.random() * RPS.length) | 0];
  return cChoice;
}

//  II. then ask the player to input a value of 'rock', 'paper' and 'scissors' (case insensitive) playerChoice().
function playerChoice() {
  const RPS = prompt("Rock? Paper? or Scissors?");
  if (/rock/i.test(RPS) || /paper/i.test(RPS) || /scissors/i.test(RPS)) {
    pChoice = RPS.toLowerCase();
    return pChoice;
  } else {
    playerChoice();
  }
}

//  III. create a function playerWins() that outputs 'playerChoice beats computerChoice'
//  IV. create a function computerWins() that outputs 'computerChoice beats playerChoice'
//  V. create a function tie() that outputs 'tie, both of you chose playerChoice'.
//  VI. create a function result() that compares between the entered values and executes output functions accordingly.
//      0. if computerChoice === playerChoice execute tie() and return 'tie'.
//      1. if computer chose rock: if player chose paper then execute playerWins() and return 'playerWins'
//      2. else execute computerWins() and return 'computerWins' }}.
//      3. else if computer chose paper: if player chose scissors run playerWins() and return 'playerWins' else execute computerWins(), return 'computerWins' }}.
//      4. else if computer chose scissors: if player chose rock execute playerWins() and return 'playerWins' else execute computerWins(), return 'computerWins'.
//  VII. create a function called game()
//      1. it should loop until the player or the computer has a scorer of five
//      2. should call  result()
//      3. if result() returns 'playerWins' add +1 to userScore, if it returns 'computerWins' add +1 to computerScore if neither then do nothing.
