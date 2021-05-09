let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll(".choices");
const score = document.getElementById("score");

let comments = document.getElementById("comments");
function pickComputerChoice() {
  const rockPaperScissors = ["rock", "paper", "scissors"];
  computerChoice =
    rockPaperScissors[(Math.random() * rockPaperScissors.length) | 0];
  return computerChoice;
}

function playerWins() {
  comments.innerText = `Your ${playerChoice} Beats His ${computerChoice}. Hurray!`;
  comments.style.color = "green";
}

function computerWins() {
  comments.innerText = `His ${computerChoice} Beats Your ${playerChoice}. Too Bad!`;
  comments.style.color = "red";
}

function tie() {
  comments.innerText = `It's a tie, both of you chose ${playerChoice}.`;
  comments.style.color = "blue";
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
function game() {
  let whoWon = result(playerChoice, computerChoice);

  whoWon === "playerWins"
    ? ++playerScore
    : whoWon === "computerWins"
    ? ++computerScore
    : "";

  score.innerText = ` ${playerScore} - ${computerScore} `;

  if (playerScore === 5 || computerScore === 5) {
    playerScore === 5
      ? (comments.innerText = `You Win, Congratulations`)
      : (comments.innerText = `You Lose, Better Luck Next Time :(`);
    playerScore = 0;
    computerScore = 0;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    playerChoice = button.value;
    pickComputerChoice();
    game();
  })
);
