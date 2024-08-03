//ready to start
function getready(){
    confirm("Do you ready to play?");
    alert("Ok. Congratulations! play well..");
    
  }
  
  
  function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  let playerScore = 0;
  let computerScore = 0;
   
  
  function determineWinner(player_Choice, computer_Choice) {
    if (player_Choice === computer_Choice) {
      return '    It\'s a tie.. Be strategic!';
    } else if (
      (player_Choice === 'rock' && computer_Choice === 'scissors') ||
      (player_Choice === 'paper' && computer_Choice === 'rock') ||
      (player_Choice === 'scissors' && computer_Choice === 'paper')
    ) {
      playerScore++;
      return' ***Congratulations***You won!'
    
    } else {
      computerScore++;
      return  '!Computer won!';
    }
  }
  
  function saveScores() {
    let scoreData = 'Player Score: ' + playerScore + '\nComputer Score: ' + computerScore;
    let hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(scoreData);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'scores.txt';
    hiddenElement.click();
  }