
//We will first implement a function that generates a choice for the computer, and will
//then compare it to that of the user. The users choice will be found through element id from the html.
//In order to compare the results, we will have to make a funciton "compare" which will establish and respond with
//the winner. This compare function will be below the play function.


//this is where we will find the computers choice and compare it to the users.
var game_result;
function play(userChoice){
  var computerChoice = Math.random();
  if(computerChoice < 0.34) {
    computerChoice = "rock";
  }
  else if(computerChoice < 0.67) {
    computerChoice = "paper";
  }
  else {
    computerChoice = "scissors";
  }
  game_result = compare(userChoice, computerChoice);
  document.getElementById("compChoice").innerHTML = computerChoice;
  document.getElementById("user").innerHTML = userChoice;
  document.getElementById("gameResult").innerHTML = game_result;
}



//this is where we decalre how to compare the choices based on the basic rules of RPS.
//think about how a player wins/loses. What is the logic? View the flowchart for reference.
var compare = function(choice1, choice2){
  if(choice1 === choice2) {
    return "The result is a tie!";
  }
  else if(choice1 === "rock") {
    if(choice2 === "scissors") {
      return "Rock wins!";
    }
    else {
      return "Paper wins!";
    }
  }
  else if(choice1 === "paper") {
    if(choice2 === "rock") {
      return "Paper wins!";
    }
    else {
      return "Scissors wins!";
    }
  }
    else {
      if(choice2 === "paper") {
        return "Scissors wins!";
      }
      else {
        return "Rock wins!";
      }
  }

}
