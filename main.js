// 0. Variables

let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

// I. we should make the computer return a a random value between 'rock', 'paper' and 'scissors'.

function computerChoice() {
  const rockPaperScissors = ["rock", "paper", "scissors"];
  computerChoice =
    rockPaperScissors[(Math.random() * rockPaperScissors.length) | 0];
  return computerChoice;
}

// II. then ask the player to input a value of 'rock', 'paper' and 'scissors' (case insensitive) playerChoice().

function playerChoice() {
  const rockPaperScissors = prompt("Rock? Paper? or Scissors?");

  if (
    /rock/i.test(rockPaperScissors) ||
    /paper/i.test(rockPaperScissors) ||
    /scissors/i.test(rockPaperScissors)
  ) {
    playerChoice = rockPaperScissors.toLowerCase();
    return playerChoice;
  } else {
    console.log("offffffff");
    playerChoice();
  }
}

//  III. create a function playerWins() that outputs 'playerChoice beats computerChoice'

function playerWins() {
  console.log(`Your ${playerChoice} Beats His ${computerChoice}. Hurray!`);
}

//  IV. create a function computerWins() that outputs 'computerChoice beats playerChoice'

function computerWins() {
  console.log(`His ${computerChoice} Beats Your ${playerChoice}. Too Bad!`);
}

//  V. create a function tie() that outputs 'tie, both of you chose playerChoice'.

function tie() {
  console.log(`It's a tie, both of you chose ${playerChoice}.`);
}

//  VI. create a function result() that compares between the entered values and executes output functions accordingly.

function result(playersChoice, computersChoice) {
  // if computerChoice === playerChoice execute tie() and return 'tie'.

  if (playersChoice === computersChoice) {
    tie();
    return "tie";
  }

  // if computer chose rock: if player chose paper then execute playerWins() and return 'playerWins'
  else {
    switch (computersChoice) {
      case "rock":
        if (playersChoice === "paper") {
          playerWins();
          return "playerWins";
        } else {
          // else execute computerWins() and return 'computerWins' .

          computerWins();
          return "computerWins";
        } // if computer chose paper: if player chose scissors run playerWins() and return 'playerWins'

      case "paper":
        if (playersChoice === "scissors") {
          playerWins();
          return "playerWins";

          // else execute computerWins(), return 'computerWins' .
        } else {
          computerWins();
          return "computerWins";
        } // if computer chose scissors: if player chose rock execute playerWins() and return 'playerWins'

      case "scissors":
        if (playersChoice === "rock") {
          playerWins();
          return "playerWins";
        } else {
          // else execute computerWins(), return 'computerWins'.

          computerWins();
          return "computerWins";
        }
    }
  }
}

//  VII. create a function called game()

function game() {
  // it should loop until the player or the computer has a score of five

  for (
    (playerScore = 0) && (computerScore = 0);
    playerScore < 5 && computerScore < 5;

  ) {
    computerChoice();
    playerChoice();

    let whoWon = result(playerChoice, computerChoice);

    // if result returns 'playerWins' add +1 to userScore, if it returns 'computerWins' add +1 to computerScore if neither then do nothing.

    whoWon === "playerWins"
      ? ++playerScore
      : whoWon === "computerWins"
      ? ++computerScore
      : "";

    // display current score to the user

    console.log(
      `The current Score is Player ${playerScore} - ${computerScore} Computer`
    );

    // if the player or the computer has a score of 5, end the game.

    if (playerScore === 5 || computerScore === 5) {
      console.log("Game Over");
    }
  }
}
