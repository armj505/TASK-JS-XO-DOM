// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let playerOne = 1;
let X = "X";
let O = "O";
let xArray = [];
let oArray = [];
const winningCondition = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function clickButton(index) {
  // if (playerOne == 1) {
  //   document.getElementById(index).classList.add("green");
  //   fillButton(index, X);
  //   document.getElementById(index).innerHTML == "o";

  //   xArray.push(index);
  //   playerOne = 0;
  //   checkWinner(xArray, winningCondition, "X");
  //   checkDraw();
  // } else {
  //   document.getElementById(index).classList.add("red");
  //   fillButton(index, O);

  //   oArray.push(index);
  //   playerOne = 1;
  //   checkWinner(oArray, winningCondition, "O");
  //   checkDraw();
  // }

  if (playerOne == 1) {
    document.getElementById(index).classList.add("green");
    fillButton(index, X);
    document.getElementById(index).onclick = 0;
    xArray.push(index);
    playerOne = 0;
    checkWinner(xArray, winningCondition, "X");
    checkDraw();
  } else {
    document.getElementById(index).classList.add("red");
    fillButton(index, O);
    document.getElementById(index).onclick = 0;
    oArray.push(index);
    playerOne = 1;
    checkWinner(oArray, winningCondition, "O");
    checkDraw();
  }
  // Your main code here.
}

function checkWinner(array, winingCon, player) {
  console.log(array);
  for (i = 0; i < winingCon.length; i++) {
    if (winingCon[i].every((x) => array.includes(x))) {
      if (confirm(`${player}, Wins!`)) {
        restartGame();
      }
    }
  }
}
function checkDraw() {
  if (xArray.length + oArray.length == 9) {
    if (confirm("It's a Draw!")) {
      restartGame();
    }
  }
}

function restartGame() {
  for (i = 0; i < 9; i++) {
    document.getElementById(i + 1).innerHTML = "";
    document.getElementById(i + 1).disabled = false;
  }
  oArray = [];
  xArray = [];
}
