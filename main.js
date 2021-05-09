let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

function pickComputerChoice() {
  const rockPaperScissors = ["rock", "paper", "scissors"];
  computerChoice =
    rockPaperScissors[(Math.random() * rockPaperScissors.length) | 0];
  return computerChoice;
}
