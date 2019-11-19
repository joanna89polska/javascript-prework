function playGame (playerInput){

  clearMessages();

  function clearMessages (){}

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    if(argMoveId == 2){
      return 'papier';
    }
    if(argMoveId == 3){
      return 'nożyce'
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
}

/*if (randomNumber == 1) {
  computerMove = 'kamień';
}
else if (randomNumber == 2) {
  computerMove = 'papier';
}
else if (randomNumber == 3) {
  computerMove = 'nożyce';
}
printMessage('Mój ruch to: ' + computerMove);*/

  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

/*if (playerInput == '1') {
  playerMove = 'kamień';
}
else if (playerInput == '2') {
  playerMove = 'papier';
}
else if (playerInput == '3'){
  playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);*/

/*if (playerMove == 'nieznany ruch') {
  printMessage('Wybierz zagranie!');
}
else if (computerMove === playerMove) {
  printMessage('Remis!');
}
else if (computerMove == 'kamień' && playerMove == 'papier') {
  printMessage('Ty wygrywasz!');
}
else if (computerMove == 'papier' && playerMove == 'nożyce') {
  printMessage('Ty wygrywasz!');
}
else if (computerMove == 'nożyce' && playerMove == 'kamień') {
  printMessage('Ty wygrywasz!');
}
else {
  printMessage('Komputer wygrywa!');
}*/

  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    console.log('moves:', argComputerMove, argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } 
    else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Ty wygrywasz!');
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('Ty wygrywasz!');
    }
    else {
      printMessage('Tym razem przegrywasz :(');
    }
  }

displayResult(computerMove,playerInput);

}



let playRock = document.getElementById("play-rock");

let playPaper = document.getElementById("play-paper");

let playScissors = document.getElementById("play-scissors");



playRock.addEventListener('click', function(){
  playGame('kamień');
});

playPaper.addEventListener('click', function(){
  playGame('papier');
});

playScissors.addEventListener('click', function(){
  playGame('nożyce');
});