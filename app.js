const userScore = document.querySelector("#userScore");
const compScore = document.querySelector("#compScore");
const msgBox = document.querySelector("#msgBox");
let userCount = 0;
let compCount = 0;

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const pos = Math.floor(Math.random() * 3);
  return options[pos];
};
const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (compChoice == userChoice) {
    msgBox.innerText = `Match is Draw😊!! both choosed ${userChoice}`;
  } else if (userChoice == "rock" && compChoice == "paper") {
    msgBox.innerText = `Oops😞!! computer choosed ${compChoice}`;
    compCount += 1;
    compScore.innerText = compCount;
  } else if (userChoice == "paper" && compChoice == "rock") {
    msgBox.innerText = `Congrats😍!! computer choosed ${compChoice}`;
    userCount += 1;
    userScore.innerText = userCount;
  } else if (userChoice == "rock" && compChoice == "scissors") {
    msgBox.innerText = `Congrats😍!! computer choosed ${compChoice}`;
    userCount += 1;
    userScore.innerText = userCount;
  } else if (userChoice == "paper" && compChoice == "scissors") {
    msgBox.innerText = `Oops😞!! computer choosed ${compChoice}`;
    compCount += 1;
    compScore.innerText = compCount;
  } else if (userChoice == "scissors" && compChoice == "rock") {
    msgBox.innerText = `Oops😞!! computer choosed ${compChoice}`;
    compCount += 1;
    compScore.innerText = compCount;
  } else if (userChoice == "scissors" && compChoice == "paper") {
    msgBox.innerText = `Congrats😍!! computer choosed ${compChoice}`;
    userCount += 1;
    userScore.innerText = userCount;
  }
};
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

//restart button
const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", () => {
  userCount = 0;
  compCount = 0;
  userScore.innerText = userCount;
  compScore.innerText = compCount;
  msgBox.innerText = `Play your move....`;
});
