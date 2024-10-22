let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  // random function generate any random number from 0 to 1. strings are not possible to genearte the randomly but numbers are
  const randInd = Math.floor(Math.random() * 3);
  return options[randInd];
};

const drawGame = () => {
  userScore = 0;
  compScore = 0;
  userScorePara.innerText = userScore;
  compScorePara.innerText = compScore;
  msg.innerText = "Game was Draw Same Choice...Play Again";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("User choice = ", userChoice);
  //Generate computer choice
  const compChoice = genCompChoice();
  console.log("Computer Choice= ", compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = false;
    if (userChoice === "Rock") {
      // computer choice scissors or paper
      userWin = compChoice === "Scissors"; //Win only if the computer chooses scissors
    } else if (userChoice === "Paper") {
      //rock / scissors computer choice
      userWin = compChoice === "Rock";
    } else {
      //rock,paper comp. choice
      userWin = compChoice === "Paper";
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
