const choices = ["rock", "paper", "scissors"];
let userChoice = "paper";

let randomChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const playGame = () => {
    let computerChoice = randomChoice();
    console.log(`You chose ${userChoice} and the computer chose ${computerChoice}.`)
    if (userChoice === "rock" && computerChoice === "scissors"
    || userChoice === "paper" && computerChoice === "rock"
    || userChoice === "scissors" && computerChoice === "paper") {
        console.log("You win!");
    } else if (userChoice === computerChoice) {
        console.log("It's a tie.");
    } else {
        console.log("You lose. :(");
    }
}