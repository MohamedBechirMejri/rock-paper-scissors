let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll(".choices");
const score = document.getElementById("score");
let currentScore = score.innerText;
function pickComputerChoice() {
  const rockPaperScissors = ["rock", "paper", "scissors"];
  computerChoice =
    rockPaperScissors[(Math.random() * rockPaperScissors.length) | 0];
  return computerChoice;
}

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    playerChoice = button.value;
  })
);
