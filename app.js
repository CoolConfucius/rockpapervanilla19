var userScore = 0; 
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
// var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.getElementById("result");
var rock_button = document.getElementById("r");
var paper_button = document.getElementById("p");
var scissors_button = document.getElementById("s");

function getComputerChoice() {
  var choices = ['r', 'p', 's'];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

function convertToWord(letter){
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
  return "Error"; 
}

function win(userChoice, computerChoice) {
  userScore++; 
  console.log("win ", userScore);
  userScore_span.innerHTML = userScore; 
  result_p.innerHTML = `User's ${convertToWord(userChoice)} beats Computer's ${convertToWord(computerChoice)}. User wins!`;
}

function lose(userChoice, computerChoice) {
  computerScore++; 
  console.log("lose ", computerScore);
  computerScore_span.innerHTML = computerScore; 
  result_p.innerHTML = `User's ${convertToWord(userChoice)} loses to Computer's ${convertToWord(computerChoice)}. User loses!`;
}

function draw(userChoice, computerChoice){
  result_p.innerHTML = `User's ${convertToWord(userChoice)} equals Computer's ${convertToWord(computerChoice)}. It's a draw.`; 
}


function game(userChoice) {
  var computerChoice = getComputerChoice(); 
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr": 
    case "sp":
      console.log("user wins");
      win(userChoice, computerChoice); 
      break; 
    case "rp":
    case "ps": 
    case "sr":
      console.log("user loses");
      lose(userChoice, computerChoice); 
      break;
    case "rr":
    case "pp": 
    case "ss":
      console.log("draw");
      draw(userChoice, computerChoice); 
      break;  
  }
}

rock_button.addEventListener('click', function(){
  console.log("clicked on rock.");
  game("r");
}); 

paper_button.addEventListener('click', function(){
  console.log("clicked on paper.");
  game("p");
}); 

scissors_button.addEventListener('click', function(){
  console.log("clicked on scissors.");
  game("s");
}); 

