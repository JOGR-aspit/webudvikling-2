let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let result = "";
    let randomNumber = Math.floor(Math.random() * 3); // generates a random number, 0, 1 or 2.
    switch (randomNumber) {
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper";
            break;
        case 2:
            result = "scissors";
            break;
    }

    console.log(`The computer chose: ${result}`);
    return result;
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter your choice: 'rock', 'paper' or 'scissors'): ");
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        alert("Invalid choice. Please try again.");
        getPlayerChoice();
    } else {
        return playerChoice;
    }

}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        ifPlayerWins();
        return "You win!";
    } else {
        ifComputerWins();
        return "You lose!";
    }
}

function ifPlayerWins() {
    playerScore++;

    const playerScoreElement = document.querySelector("#player-score");
    playerScoreElement.textContent = playerScore;
}

function ifComputerWins() {
    computerScore++;

    const computerScoreElement = document.querySelector("#computer-score");
    computerScoreElement.textContent = computerScore;
}

// console.log(getComputerChoice());
// console.log(getPlayerChoice());

document.querySelector("#rock").addEventListener("click", function () {
    console.log(playRound("rock", getComputerChoice()));
});
document.querySelector("#paper").addEventListener("click", function () {
    console.log(playRound("paper", getComputerChoice()));
});
document.querySelector("#scissors").addEventListener("click", function () {
    console.log(playRound("scissors", getComputerChoice()));
});

// console.log(playRound(getPlayerChoice(), getComputerChoice()));