/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

/*
    Richard's notes: Fun project, the way wins were determined was unexpected but it works. Never would that thought of it that way
    A depth first search of the board is probably the way I would have went if it wasn't included at first

    1: I am not a designer, I realize this, I'm trying my best. 
    2: I tried finding a better font for the numbers, because it was hard to read some of them
            Instead I set on mapping the color labels to slightly different colors to ensure readability
    3: I also added numbers to the pieces, to aid in accessibility of the program
    4: I added the ability to resize the board, seemed like a neat addition and a good way to learn additional stuff
    5: I added the ability to change how many players are playing, ^^
    6: I added the ability to set the win condition, ^^




*/

// Unsure if I should merge these variables or just link them together
var WIDTH = 7; // Default 7
var HEIGHT = 6; // Default 6

let defaultWidth = 7;
let defaultHeight = 6;
let defaultPlayers = 2;
let defaultWinCondition = 4;

let currPlayer = 0; // active player: 1 or 2
let maxPlayers = 5;// Less than the limit of colors!
let inARowWinCondition = 4;// Less than the limit of colors!

// Maps the color names with different colors, because the default colors were hard to read the numbers from
let playerColorsReal = new Map([
                        ["Red","Red"],
                        ["Blue","#3366ff"],
                        ["Green","Green"],
                        ["Yellow","Yellow"],
                        ["Purple","#9900ff"],
                        ["Orange","Orange"]
                        ]);
// But the displayed names should stay the same
let playerColorsName = [...playerColorsReal.keys()];


/* Elements on the page */
// Range sliders
let howManyRowsRange = document.getElementById('howmanyrowsrange');
let howManyColumnsRange = document.getElementById('howmanycolumnsrange');
let howManyPlayersRange = document.getElementById('howmanyplayersrange');
let howManyInARowRange = document.getElementById('howmanyinarowrange');

// Range slider labels
let howManyRowsLabel = document.getElementById('howmanyrowslabel');
let howManyColumnsLabel = document.getElementById('howmanycolumnslabel');
let howManyPlayersLabel = document.getElementById('howmanyplayerslabel');
let howManyInARowLabel = document.getElementById('howmanyinarowlabel');

// DONE TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
// Game board itself
const htmlBoard = document.getElementById('board');
// Virtual board
// Swapped to the board being a Map, we'll see how it goes. Update: Went perfectly!
let board = new Map();

let winningPieces = []; // I realize this probably could have been passed around as a return, but hindsight is 2020


/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard(clearFirst) {
  //console.log("MAKE HTML BOARD FUNCTION RAN");
  if (clearFirst){
    // DONE TODO: Wipe board 
    htmlBoard.innerHTML = '';
    board.clear();// Reset the Map board
    currPlayer = 0; // Resets the current player to the default 0
  }
  // Create the data structure that represents the page:
  //makeBoard();

  // DONE TODO: add comment for this code
  var top = document.createElement("tr"); // Grab the top row into a variables
  top.setAttribute("id", "column-top"); // Set its attribute for later use
  top.addEventListener("click", handleClick); // Setup a click function to know where the user clicked

  // For every column
  for (var x = 0; x < WIDTH; x++) {
    // Create a table data cell element
    var headCell = document.createElement("td");
    // Set an attribute for later use
    headCell.setAttribute("id", x);
    // Attach it to the top "ghost" row
    top.append(headCell);
  }
  // Attach the "ghost" row to the board
  htmlBoard.append(top);

  // DONE TODO: add comment for this code
  // Loop however many rows there should be
  for (var y = 0; y < HEIGHT; y++) {
    // Create a row for each number
    const row = document.createElement("tr");
    // Loop however many columns there should be
    for (var x = 0; x < WIDTH; x++) {
      // Create a table data cell element
      const cell = document.createElement("td");
      // Set the coordinates for later use
      let targetAttribute = `${y}-${x}`;
      cell.setAttribute("id", targetAttribute);
      // Attach newly created square to the row
      row.append(cell);

      // This section replaced the makeBoard() function. I figured we're already looping, might as well use it. And this way we get a reference
      const newCell = 
      { selfX:x,
        selfY:y,
        player:-1,
        orderPlaced:-1,
        cell,
        targetAttribute, // For use getting the specific cell later. Hey look, ES2015 use

      }
      //board.set(targetAttribute, newCell); // Add the cell to the array
      board.set(targetAttribute, newCell); // Add the cell to the array
    }
    // Attach the assembled row to the board
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // DONE TODO: write the real version of this, rather than always returning 0
  
  //for (var y=0; y<HEIGHT;y++){
  for (var y=HEIGHT-1; y>=0;y--){ // loop however high the board is
    let targetAttribute = `${y}-${x}`;
    //console.log(`y:${y},x=${x}`);
    if (!board.has(targetAttribute)){ // Double check, don't proceed if there's no key
      console.log(`No key found for ${y}-${x}`);
    } 
    else{
      if (board.get(targetAttribute).player == -1){ // If the loop peice doesn't have a real player
        return y; // Then its a valid move so return that Y
      }
    }
  }
  return null; // Made it through the loop without finding a valid move, so return null 
}

/** placeInTable: update DOM to place piece into HTML table of board */
function placeInTable(y, x) {
  // DONE TODO: make a div and insert into correct table cell
  let targetAttribute = `${y}-${x}`;
  let realCell = document.getElementById(targetAttribute);

  board.get(targetAttribute).player = currPlayer;
  realCell.classList.add("piece"); // Adds the piece class from CSS
  realCell.style.background = playerColorsReal.get(playerColorsName[currPlayer]); // Set the color to the player's color from the color map
  realCell.innerText = `${currPlayer + 1}`; // Offset the players by one, so it starts at 1
}

/** endGame: announce game end */
function endGame(msg) {
  alert(msg); // DONE TODO: pop up alert message
  currPlayer = 0; // Reset the player to default 0
  makeHtmlBoard(true); // Make the board, and clear the original off first
}

/** handleClick: handle click of column top to play piece */
function handleClick(evt) {
  
  var x = +evt.target.id; // What does this mean? ANSWER: // get x from ID of clicked cell (Get the column)
  var y = findSpotForCol(x);// What does this mean? ANSWER: // get next spot in column (if none, ignore click)
  if (y === null) { // If no Y was found, something went wrong or no empty space
    console.log(`No correct space found, pick another column`); // Console isn't the best place for this, I know, but best I have, I didn't make a message box
    return; // No correct space found, simply stop
  }
  // DONE TODO: add line to update in-memory board
  placeInTable(y, x); // place piece in board and add to HTML table
  
  // check for win. 
  if (checkForWin()) { // If a win was found
    for (winningPiece of winningPieces){ // Loop all moving pieces
      let targetAttribute = `${winningPiece[0]}-${winningPiece[1]}`; // Setup the attribute to grab it from the map
      board.get(targetAttribute).cell.classList.add("blink_me"); // Add the blinker class 
    }
    // Delayed the function because without it the game wouldn't update the winning piece
    setTimeout(function(){
      endGame(`Player ${currPlayer} won!`);
    }), 0;
    
  }
  
  // DONE TODO: switch currPlayer 1 <-> 2
  currPlayer = (currPlayer < maxPlayers - 1) ? currPlayer + 1 : 0;

  // DONE TODO: check if all cells in board are filled; if so call, call endGame
  // check for tie
  if (tieGame()){ // If a tie was found
    // Delayed the function because without it the game wouldn't update the tying piece
    setTimeout(function(){
    endGame(`Tie game, you both lose!`) // Call the end game with a tie message, which resets the board
    }), 0;
  
  }
}

function tieGame(){
  for (var y = 0; y < HEIGHT; y++) { // Loops every row
    for (var x = 0; x < WIDTH; x++) { // Loops every individual cell
      if (board.get(`${y}-${x}`).player == -1){ // If the map doesn't contain the given XY key
        return false; // Empty space found, return false for not tied
      }
    }
  }
  return true; // No empty space found, return end game
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */
// Exactly as stated above. Checks every cell, and checks if any fit the win condition
function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer
    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board.get(`${y}-${x}`).player == currPlayer // Only part of this I wrote. Gets the cell object from the map, and attempts to match the player from it
    );
  }
  // DONE TODO: read and understand this code. Add comments to help you.

  // The two loops ensure it loops over every cell
  for (var y = 0; y < HEIGHT; y++) { // Loops every row
    for (var x = 0; x < WIDTH; x++) { // Loops every individual cell
      
      // Sets win conditions to Straight up, straight right, diagonally down right, and diagonally down left
      // No need for upLeft/upRight/straight down, or straight left, as it loops every cell,
      //    So it will look at all moves regardless. I could complete this with a loop (or a depth first search), 
      //    but decided to stick with the theme given
      var horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3], [y, x + 4], [y, x + 5], [y, x + 6], [y, x + 7]].slice(0, inARowWinCondition); // Unsure why, but its 1 less than expected. 
      var vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x], [y + 4, x], [y + 5, x], [y + 6, x], [y + 7, x]].slice(0, inARowWinCondition);
      var diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3], [y + 4, x + 4], [y + 5, x + 5], [y + 6, x + 6], [y + 7, x + 7]].slice(0, inARowWinCondition);
      var diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3], [y + 4, x - 4], [y + 5, x - 5], [y + 6, x - 6], [y + 7, x - 7]].slice(0, inARowWinCondition);

      // Original code
      // if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
      //   return true;
      // }

      //Patched so I can display the winning move. This passes the X pieces used for the winning move, if found
      if (_win(horiz)) return winningPieces = [...horiz];
      if (_win(vert)) return winningPieces = [...vert];
      if (_win(diagDR)) return winningPieces = [...diagDR];
      if (_win(diagDL)) return winningPieces = [...diagDL];

    }
  }
}

// ON PAGE LOAD: Set up the page from memory, which updates the labels, etc. 
document.addEventListener("DOMContentLoaded", function(event){ // Once the page loads
  setupPageFromMemory();
});

// Sets page from memory, gets the values from local storage, saves them to variables, then requests a label update
//      but denies a save to memory, as these values should already exist. If they don't, no need to save since we
//      have default values to fall back on
function setupPageFromMemory(){
  // Gets values for the range sliders, and has defaults to fall back on should they fail
  howManyColumnsRange.value = JSON.parse(localStorage.getItem("howmanycolumnsrange") || 7); // How many columns (X)
  howManyRowsRange.value = JSON.parse(localStorage.getItem("howmanyrowsrange") || 7); // How many rows (Y)
  howManyPlayersRange.value = JSON.parse(localStorage.getItem("howmanyplayersrange") || 2); // Max players
  howManyInARowRange.value = JSON.parse(localStorage.getItem("howmanyinarowrange") || 4); // Win condition, how many in a row
  updateLabelsOnScreen(false); // Updates board size without saving to memory
}

// Updates the size of the board based on selections from the sliders
function updateLabelsOnScreen(saveToMemory){ 
  //restrictSizes(); // Decided not to go through with controlling the size
  howManyColumnsLabel.innerText = `${howManyColumnsRange.value} columns`; // How many columns (X)
  howManyRowsLabel.innerText = `${howManyRowsRange.value} rows`; // How many rows (Y)
  maxPlayers = howManyPlayersRange.value; // Update max players based on range value
  howManyPlayersLabel.innerText = `${maxPlayers} players: ${playerColorsName.slice(0,maxPlayers).join("/")}`; // Max players
  howManyInARowLabel.innerText = `${howManyInARowRange.value} in a row`; // Win condition, how many in a row
  document.title = `Connect ${howManyInARowRange.value}`; // Sets the tab title
  inARowWinCondition = howManyInARowRange.value; // Saves the win condition to a variable. Thought it was better than reading the slider each time? Maybe?
  WIDTH = howManyColumnsRange.value; // Match these to the ranges
  HEIGHT = howManyRowsRange.value; // Match these to the ranges
  makeHtmlBoard(true); // Clear the board and reset it first
  if (saveToMemory) updateSettingsInMemory(); // Only save if requested by parameter. 

}

// function restrictSizes(){
//   // I was considering controlling for the size of the board, but there's just too many 
//   //    edge cases to realistically control with any semblance of realism 
// }

// Gets the values from sliders and inputs them into memory
function updateSettingsInMemory(){
  // Get the range values and save them to memory
  localStorage.setItem("howmanyrowsrange", JSON.stringify(howManyRowsRange.value));
  localStorage.setItem("howmanycolumnsrange", JSON.stringify(howManyColumnsRange.value));
  localStorage.setItem("howmanyplayersrange", JSON.stringify(howManyPlayersRange.value));
  localStorage.setItem("howmanyinarowrange", JSON.stringify(howManyInARowRange.value));
}

// Resets the settings to default Connect 4 settings, then requests labels be updated and requests a save to memory
function defaultSettingsButton(){
  // Match the range sliders with the defaults
  howManyRowsRange.value = defaultHeight;
  howManyColumnsRange.value = defaultWidth;
  howManyPlayersRange.value = defaultPlayers;
  howManyInARowRange.value = defaultWinCondition;
  // Update the size, and send a true parameter so it wipes the board first
  updateLabelsOnScreen(true);
}