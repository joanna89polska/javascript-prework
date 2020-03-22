{
  const playGame = function (playerInput) {
    clearMessages();

    const getMoveName = function (randomNumber) {
      if (randomNumber == 1) {
        return 'kamień';
      } else if (randomNumber == 2) {
        return 'papier';
      } else if (randomNumber == 3) {
        return 'nożyce';
      }
    }

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);

  const playerMove = getMoveName(playerInput);
  printMessage('Mój ruch to: ' + playerMove);

  const computerMove = getMoveName(randomNumber);
  printMessage('Komputer zagrał: ' + computerMove);

  const displayResult = function (argComputerMove, argPlayerMove) {
    if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
      printMessage('WYNIK: Jest remis');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
      printMessage('WYNIK: Jest remis');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
      printMessage('WYNIK: Jest remis');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      printMessage('WYNIK: Wygrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('WYNIK: Wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('WYNIK: Wygrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      printMessage('WYNIK: Komputer wygrywa');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
      printMessage('WYNIK: Komputer wygrywa');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      printMessage('WYNIK: Komputer wygrywa');
    } else if (argPlayerMove == 'nieznany ruch') {
      printMessage('Błąd')
    }
  }
  displayResult(computerMove, playerMove)
}

document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2);
});

document.getElementById('play-rock').addEventListener('click', function () {
  playGame(1);
});

document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3);
});

}