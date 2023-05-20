let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random()*10);
};

function compareGuesses(humanGuess,computerGuess,targetGuess)
{
    let humanDifference = Math.abs(targetGuess - humanGuess);
    let computerDifference = Math.abs(targetGuess - computerGuess);
    return humanDifference <= computerDifference;  
};
/*
function compareGuesses (humanGuess, computerGuess, targetNumbers){
  if(getAbsoluteDistance(humanGuess, targetNumbers) <= getAbsoluteDistance(computerGuess, targetNumbers)) {
    return true;
  }
  else{
    return false;
  }
};
  */    

function updateScore(winner){
   
  if(winner === 'human')
  {
    humanScore++;
  }
  else
  {
    computerScore++;
  }

};

function advanceRound(){
  currentRoundNumber++;
};

/*function getAbsoluteDistance(guess,target){
  Math.abs(target - guess);
};
*/
const check = humanGuess => {
  if (humanGuess > 9 || humanGuess < 0)
   {
      window.alert( 'Your number is out of range! Pleas, choose number between 0 and 9.')
      } 
  }
//console.log(advanceRound());
//console.log(updateScore('human'));

