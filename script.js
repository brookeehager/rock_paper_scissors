//Computer selects random move: rock, paper or scissors
function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    let computerSelect = Math.floor(Math.random() * choice.length);
    return computerSelect, choice[computerSelect];
}

//Player enters their move.
function playerPlay() {
    return prompt("What's your move?").toLowerCase().trim() //Prompts user to enter move
}

//Calculate winner
function calcWinner(playerSelection, computerSelection) {
    switch(computerSelection) {
        case "rock":
            switch(playerSelection) {
                case "rock":
                    return "tie";
                case "paper":
                    return "playerWin";
                case "scissors":
                    return "computerWin";
            }
        case "paper":
            switch(playerSelection) {
                case "rock":
                    return "computerWin";
                case "paper":
                    return "tie";
                case "scissors":
                    return "playerWin";
            }
        case "scissors":
            switch(playerSelection) {
                case "rock":
                    return "playerWin";
                case "paper":
                    return "computerWin";
                case "scissors":
                    return "tie";
            }
    }
}

//Game play
function gameRound() {
    let playerScore = 0;
    let computerScore = 0;

    for (let rounds = 0; rounds <= 6; rounds++) {
        switch(calcWinner(playerPlay(), computerPlay())) {
            case "playerWin":
                playerScore++;
                console.log("You win! Your score is " + playerScore);
                console.log("computer score is " + computerScore);
                break;
            case "computerWin":
                computerScore++;
                console.log("You lose! Computer score is now " + computerScore);
                console.log("Your score is " + playerScore);
                break;
            case "tie":
                console.log("It's a tie!");
                console.log("Player score: " + playerScore);
                console.log("Computer score: " + computerScore);
                break;
        }
    }
    console.log("Game over! Your score is " + playerScore);
    console.log("Computer score is " + computerScore);
}
console.log(gameRound());
