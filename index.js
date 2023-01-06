/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/


let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
    
//Adding event listeners to all buttons
    let rpsbuttons = document.querySelectorAll('.rpsButton')
    // rpsbuttons.forEach(button=>{ button.addEventListener('click', onClickRPS)})
  
 for (const button of rpsbuttons) {
    button.addEventListener('click',onClickRPS)
    
 }

let endGameButton = document.getElementById('endGameButton')
  endGameButton.addEventListener('click',  endGame)
 

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **

function getComputerChoice() {
    const randomArray = [ 'Rock✊','Paper🤚','Scissors✌']
    const randomSelect = Math.floor(Math.random()*3)
   
    return randomArray[randomSelect]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **

// 
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  // All situations where human draws, set `score` to 0
  if(playerChoice === computerChoice){
    return score = 0
    result.innerText = 'Draw'
   
    hands.innerText = `👱Player: ${playerChoice} vs 🤖Computer: ${computerChoice}`
  }
   // All situations where human wins, set `score` to 1
  else if (playerChoice==='Rock✊' && computerChoice =='Paper🤚'){
    result.innerText ='You win'
   score = 1
    }
  else if (playerChoice==='Paper🤚' && computerChoice =='Rock✊'){
    result.innerText ='You win'
     score =1
    }
    else if (playerChoice==='Scissors✌' && computerChoice =='Paper🤚'){
      result.innerText ='You win'
       score =1
    }
          // Otherwise human loses (aka set score to -1)
  else {
    result.innerText ='You lose'
    score = -1
  }
  return score
}

// plassing playerChoice from selected clicked button
function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice()
   hands.innerText = `👱Player: ${playerChoice.target.value} vs 🤖Computer: ${computerChoice}`
  
  let score = getResult(playerChoice.target.value, computerChoice)
 playerScore.innerText = `${Number(playerScore.innerText) + score}`
  
}
function endGame() {
    
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()

