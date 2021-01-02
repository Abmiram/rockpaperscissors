const choices = ["rock", "paper", "scissors"];

let randomChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const playGame = () => {
    const message = document.getElementById("gameResults");
    let computerChoice = randomChoice();
    if (userChoice === "rock" && computerChoice === "scissors"
    || userChoice === "paper" && computerChoice === "rock"
    || userChoice === "scissors" && computerChoice === "paper") {
        message.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice}.  You win!`
    } else if (userChoice === computerChoice) {
        message.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice}.  It's a tie.`
    } else {
        message.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice}.  You lose :(`
    }
}

const getUserChoice = (selectedIcon) => {
    userChoice = `${selectedIcon}`;
    playGame();
}