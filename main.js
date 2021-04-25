//  0. Variables

let cChoice,
	pChoice,
	cScore = 0,
	pScore = 0;

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
		console.log("offffffff");
		playerChoice();
	}
}

//  III. create a function playerWins() that outputs 'playerChoice beats computerChoice'

function playerWins() {
	console.log(`Your ${pChoice} Beats His ${cChoice}. Hurray!`);
}

//  IV. create a function computerWins() that outputs 'computerChoice beats playerChoice'

function computerWins() {
	console.log(`His ${cChoice} Beats Your ${pChoice}. Too Bad!`);
}

//  V. create a function tie() that outputs 'tie, both of you chose playerChoice'.

function tie() {
	console.log(`It's a tie, both of you chose ${pChoice}.`);
}

//  VI. create a function result() that compares between the entered values and executes output functions accordingly.

function result(plChoice, coChoice) {
	//  if computerChoice === playerChoice execute tie() and return 'tie'.

	if (plChoice === coChoice) {
		tie();
		return "tie";
	}

	// if computer chose rock: if player chose paper then execute playerWins() and return 'playerWins'
	else
		switch (coChoice) {
			case "rock":
				if (plChoice === "paper") {
					playerWins();
					return "playerWins";
				} else {
					// else execute computerWins() and return 'computerWins' .

					computerWins();
					return "computerWins";
				} // if computer chose paper: if player chose scissors run playerWins() and return 'playerWins'

			case "paper":
				if (plChoice === "scissors") {
					playerWins();
					return "playerWins";

					// else execute computerWins(), return 'computerWins' .
				} else {
					computerWins();
					return "computerWins";
				} // if computer chose scissors: if player chose rock execute playerWins() and return 'playerWins'

			case "scissors":
				if (plChoice === "rock") {
					playerWins();
					return "playerWins";
				} else {
					// else execute computerWins(), return 'computerWins'.

					computerWins();
					return "computerWins";
				}
		}
}

//  VII. create a function called game()

function game() {
	// it should loop until the player or the computer has a scorer of five

	for ((pScore = 0) && (cScore = 0); pScore < 5 && cScore < 5; ) {
		computerChoice();
		playerChoice();

		//  should call  result()

		let whoWon = result(pChoice, cChoice);

		// if result() returns 'playerWins' add +1 to userScore, if it returns 'computerWins' add +1 to computerScore if neither then do nothing.

		whoWon === "playerWins"
			? ++pScore
			: whoWon === "computerWins"
			? ++cScore
			: "";
		console.log(`The current Score is Player ${pScore} - ${cScore} Computer`);
		if (pScore === 5 || cScore === 5) {
			console.log("Game Over");
		}
	}
}
