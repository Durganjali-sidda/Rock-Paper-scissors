let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  //rock paper scissors
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawgame = () => {
  msg.innerText = "Game was Draw.play Again!";
  msg.style.backgroundColor = "blue";
};
const showWinner = (userWin, userChoice, CompChoice) => {
  if (userWin) {
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${CompChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepara.innerText = compScore;
    msg.innerText = `You lose! computer ${userChoice} beats your ${CompChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  //generate computer choice
  const CompChoice = genCompChoice();
  console.log("Comp choice = ", CompChoice);
  if (userChoice === CompChoice) {
    drawgame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = CompChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock , scossors
      userWin = CompChoice === "scissors" ? false : true;
    } else {
      //rock , paper
      userWin = CompChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, CompChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
