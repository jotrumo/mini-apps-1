/*Generates obj for each td tag in the HTML table. Ordered from
top left to bottom right.*/

var arr = document.getElementsByTagName("td");
var key = {};

for (let i = 0; i < arr.length; i++) {
  key[i] = arr[i];
};

key[0].innerHTML = '-';
key[1].innerHTML = '-';
key[2].innerHTML = '-';

key[3].innerHTML = '-';
key[4].innerHTML = '-';
key[5].innerHTML = '-';

key[6].innerHTML = '-';
key[7].innerHTML = '-';
key[8].innerHTML = '-';

//create event handler
for (let j = 0; j < arr.length; j++) {
  arr[j].addEventListener("click", handleClick);
};

var buttonElement = document.getElementById("btn");
buttonElement.addEventListener('click', function(event) {
  for (let prop in key) {
    key[prop].innerHTML = '-';
  };
  alert("Good Luck!");
});

var isX = true;

function handleClick() {

  if (this.innerHTML === "X" || this.innerHTML === "O") {
    alert("No cheating! Try again.");
    return this.innerHTML;
  }
  if (isX === true) {
    this.innerHTML = "X";
    isX = false;
  } else {
    this.innerHTML = "O";
    isX = true;
  }
  // checkCondition();
};

