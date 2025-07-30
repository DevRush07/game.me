let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
   const options = ["rock", "paper", "scissor"];
   const randIdx = Math.floor(Math.random() * 3);
   return options[randIdx];

};

const showWinner = (userWin, userChoice, compChoice) => {
   if (userWin){
      console.log("you win!");
      userScore++;
      userScorePara.innerText= userScore;
      msg.innerText = "you win!";
      msg.style.backgroundColor = "green";
   } else {
      console.log("you lose");
      compScore++;
      compScorePara.innerText= compScore;
     
      msg.innerText = "you lose.";
      msg.style.backgroundColor = "red";
   }
};

const drawGame = () => {
   console.log("game was draw");
   msg.innerText = "game was draw, play again";
}

const playGame = (userChoice) => {
   console.log("userChoice=", userChoice);
   const compChoice = genCompChoice();
   console.log("comp choice = ", compChoice);

   if (userChoice === compChoice) {
      //draw condition
      drawGame();
   } else {
      let userWin = true;
      if (userChoice === "rock") {
         userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
         userWin = compChoice === "scissor" ? false : true;
      } else {
         userWin = compChoice === "rock" ? false : true;

      }
      showWinner(userWin, userChoice, compChoice);



   }


};

//generate computer choice;

choices.forEach((choice) => {
   choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id")
      playGame(userChoice);

   });

});
