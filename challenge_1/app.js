
//creates array of all table data elements
var player1 = 0;
var player2 = 0;

var arr = document.getElementsByTagName("td");

/*Generates board from each td tag in the HTML table. Ordered from
top left to bottom right.*/
var board = {};
for (let i = 0; i < arr.length; i++) {
  board[i] = arr[i];
  board[i].innerHTML = "-";
};

//create eventListener for each board element
for (let key in board) {
  board[key].addEventListener("click", handleClick);
};

//create eventListener for "Start Over" button
var buttonElement = document.getElementById("btn");
buttonElement.addEventListener('click', function() {
  for (let key in board) {
    board[key].innerHTML = '-'; //resets tile chars
  };
  console.log(player1, player2);
   //resets table
  nextCharX = true; //resets so first char is "X"
});

//event handler for each board element
var nextCharX = true;
function handleClick() {
  var result = '';

  if (this.innerHTML === "X" || this.innerHTML === "O") {
    alert("No cheating! Try again.");
    return this.innerHTML;
  }
  if (nextCharX === true) {
    this.innerHTML = "X";
    nextCharX = false;
  } else if (nextCharX === false) {
    this.innerHTML = "O";
    nextCharX = true;
  }
  checkCondition();
};

//checks win conditions for all rows, columns, and diagonals - need to refactor
var checkCondition = function () {

  if (board[0].textContent === "X" && board[1].textContent === "X" && board[2].textContent === "X") {
    player1++;
    alert("Player 1 Wins!!!");
  } else if (board[0].textContent === "O" && board[1].textContent === "O" && board[2].textContent === "O") {
    alert("Player 2 Wins!!!");
    player2++;
  } else if (board[3].textContent === "X" && board[4].textContent === "X" && board[5].textContent === "X") {
    alert("Player 1 Wins!!!");
    player1++;
  } else if (board[3].textContent === "O" && board[4].textContent === "O" && board[5].textContent === "O") {
    alert("Player 2 Wins!!!");
    player2++;
  } else if (board[6].textContent === "X" && board[7].textContent === "X" && board[8].textContent === "X") {
    player1++;
    alert("Player 1 Wins!!!");
  } else if (board[6].textContent === "O" && board[7].textContent === "O" && board[8].textContent === "O") {
    player2++;
    alert("Player 2 Wins!!!");
  } else if (board[0].textContent === "X" && board[3].textContent === "X" && board[6].textContent === "X") {
    player1++;
    alert("Player 1 Wins!!!");
  } else if (board[0].textContent === "O" && board[3].textContent === "O" && board[6].textContent === "O") {
    alert("Player 2 Wins!!!");
  } else if (board[1].textContent === "X" && board[4].textContent === "X" && board[7].textContent === "X") {
    player1++;
    alert("Player 1 Wins!!!");
  } else if (board[1].textContent === "O" && board[4].textContent === "O" && board[7].textContent === "O") {
    player2++;
    alert("Player 2 Wins!!!");
  } else if (board[2].textContent === "X" && board[5].textContent === "X" && board[8].textContent === "X") {
    player1++;
    alert("Player 1 Wins!!!");
  } else if (board[2].textContent === "O" && board[5].textContent === "O" && board[8].textContent === "O") {
    player2++;
    alert("Player 2 Wins!!!");
  } else if (board[0].textContent === "X" && board[4].textContent === "X" && board[8].textContent === "X") {
    player1++;
    alert("Player 1 Wins!!!");
  } else if (board[0].textContent === "O" && board[4].textContent === "O" && board[8].textContent === "O") {
    player2++;
    alert("Player 2 Wins!!!");
  } else if (board[2].textContent === "X" && board[4].textContent === "X" && board[6].textContent === "X") {
    player1++;
    alert("Player 1 Wins!!!");
  } else if (board[2].textContent === "O" && board[4].textContent === "O" && board[6].textContent === "O") {
    player2++;
    alert("Player 2 Wins!!!");
  }
};








