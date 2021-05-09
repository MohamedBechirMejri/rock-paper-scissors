let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll(".choices");
const score = document.getElementById("score");
let currentScore = score.innerText;
let comments = document.getElementById("comments");
function pickComputerChoice() {
  const rockPaperScissors = ["rock", "paper", "scissors"];
  computerChoice =
    rockPaperScissors[(Math.random() * rockPaperScissors.length) | 0];
  return computerChoice;
}

function playerWins() {
  comments.innerText = `Your ${playerChoice} Beats His ${computerChoice}. Hurray!`;
}

function computerWins() {
  comments.innerText = `His ${computerChoice} Beats Your ${playerChoice}. Too Bad!`;
}

function tie() {
  comments.innerText = `It's a tie, both of you chose ${playerChoice}.`;
}
function result(playersChoice, computersChoice) {
  if (playersChoice === computersChoice) {
    tie();
    return "tie";
  } else {
    switch (computersChoice) {
      case "rock":
        if (playersChoice === "paper") {
          playerWins();
          return "playerWins";
        } else {
          computerWins();
          return "computerWins";
        }
      case "paper":
        if (playersChoice === "scissors") {
          playerWins();
          return "playerWins";
        } else {
          computerWins();
          return "computerWins";
        }
      case "scissors":
        if (playersChoice === "rock") {
          playerWins();
          return "playerWins";
        } else {
          computerWins();
          return "computerWins";
        }
    }
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    playerChoice = button.value;
    pickComputerChoice();
    result(playerChoice, computerChoice);
  })
);
