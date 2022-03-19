// grab/ make HTML elements here.
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");


//defining other game objects.
let winner = "";
let playerChoice = "";
let comchoice = ["rock", "paper", "scissors"];
let playerScore = 0;
let compScore = 0;
let roundWinner = "";

// event listeners.
rockButton.onclick = function(){
   playerChoice = "rock";
   if (playerScore > 4 || compScore > 4){
      resetGame();
   }
   else { 
      playRound();
   }
  
}

paperButton.onclick = function(){
   playerChoice = "paper";
   if (playerScore > 4 || compScore > 4){
      resetGame();
   }
   else {
      playRound();
   }
   
}

scissorsButton.onclick = function(){
   playerChoice = "scissors";
   if (playerScore > 4 || compScore > 4){
      resetGame();   }
   else{
      playRound();
   }
}  

// if else checking statments


//game functions.
function playRound(playerSelection, computerSelection) {
  playerSelection = playerChoice;
  computerSelection = comchoice[Math.floor(Math.random() * comchoice.length)];
  console.log(computerSelection);
  console.log(playerSelection);
  if (playerSelection === computerSelection) {
   document.getElementById("pTxt").innerText = playerSelection + ":" + " \n TIE!";
   document.getElementById("cTxt").innerText = computerSelection + ":" + "\n TIE!";
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    document.getElementById("pTxt").innerText = playerSelection + ":" + "\n WINNER!";
    document.getElementById("cTxt").innerText = computerSelection + ":" + " \nLOSER!" ;
    document.getElementById("pNum").innerText = playerScore.toString();
    document.getElementById("cNum").innerText = compScore.toString();
    console.log(playerScore);
  }
  if (
    (computerSelection == "rock" && playerSelection === "scissors") ||
    (computerSelection == "scissors" && playerSelection === "paper") ||
    (computerSelection == "paper" && playerSelection === "rock")
  ) {
    compScore++; 
    document.getElementById("pTxt").innerText = playerChoice + ":" + "\n LOSER!";
    document.getElementById("cTxt").innerText = computerSelection + ":" + "\n WINNER!";
    document.getElementById("pNum").innerText = playerScore.toString();
    document.getElementById("cNum").innerText = compScore.toString();
    console.log(compScore);

  }
}
function resetGame() {
   if (playerScore < compScore){
      document.getElementById("WorL").innerText = "YOU LOSE...💀LOSER!"
}
   else if ( playerScore > compScore){
      document.getElementById("WorL").innerText = "YOU WIN!!!!!!"
   }
   setTimeout(() => {window.location.reload();}, 1000);

}
