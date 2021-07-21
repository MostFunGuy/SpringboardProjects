const gameContainer = document.getElementById("game");

const guessCounterdiv = document.getElementById("guesscounterdiv");
const bestScorediv = document.getElementById("bestscorediv");
const restartGameButton = document.getElementById("restartgamebutton");
const startGameButton = document.getElementById("startgamebutton");

const howManySetsRange = document.getElementById("howmanysetsrange");
const howManySetsLabel = document.getElementById("howmanysetslabel");
const howManyInEachSetRange = document.getElementById("howmanyineachsetrange");
const howManyInEachSetLabel = document.getElementById("howmanyineachsetlabel");

const easyButton = document.getElementById("easybutton");
const mediumButton = document.getElementById("mediumbutton");
const hardButton = document.getElementById("hardbutton");

const debugCheckbox = document.getElementById("debugcheckbox");


var guessCounter = 0
var debugState;

var arrayOfClickedDivs = []; //For recording which divs are currently clicked
var arrayOfFinishedDivs = []; //For recording which divs have been correctly matched

let noClickingAllowed = false; //For locking out clicks while the cards are showing a bad match

var REALClickableCards; 

var tempCOLORS = [];
var COLORS = [];


//ON PAGE LOAD
document.addEventListener("DOMContentLoaded", function(event){ // Once the page loads
  setupPageFromMemory();
  howManySetsRange.value = JSON.parse(localStorage.getItem("howManySetsRange") || 0);
  howManyInEachSetRange.value = JSON.parse(localStorage.getItem("howManyInEachSetRange") || 0);
  //console.log(howManySetsRange.value);
  updateHowManySets();
  updateHowManyInEachSet();
  debugState = debugCheckbox.checked = JSON.parse(localStorage.getItem("debugstate") || false);
});

function setupPageFromMemory(){
  var bestScore = JSON.parse(localStorage.getItem("bestscore") || "false");
  if (bestScore != false){ // If a high score has been recorded
    bestScorediv.innerText = `Best score: ${bestScore}`;
  }
}

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}


// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    //I was unsure if this class was enough, in case we added other classes, so I recorded the color into a data attribute as well:
    newDiv.dataset.color = color;

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);

    if (debugState){// If the debug state is active, fill in the information first hand
      newDiv.style.backgroundColor = color;
      newDiv.innerText = `${color}`;
    }
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  let clickedColor = event.target.dataset.color;
  //Validate I did this right:
  let errorfound = false;
  if (arrayOfClickedDivs.length > 0){
    if (arrayOfClickedDivs.includes(event.target)){
      //Testing
      console.log("Cannot click the same card. Click a different one!")
      errorfound = true;
    }
  }
  if (arrayOfFinishedDivs.length > 0){
    if (arrayOfFinishedDivs.includes(event.target)){
      //Testing
      console.log("Cannot click an already matched card. Click a different one!")
      errorfound = true;
    }
  }
  if (noClickingAllowed){
    console.log("Waiting on cards to time out")
    errorfound = true;
  }
  //Check if an error was found
  if (!errorfound){ //If it passes this, no errors were found
    
    //Set the background color once you validate this was a valid click
    event.target.style.backgroundColor = clickedColor;
    arrayOfClickedDivs.push(event.target);
    if (arrayOfClickedDivs.length < REALClickableCards){ // If the user must click more cards
      //console.log("Click another card!");
    }
    else{ // Enough cards were clicked. Lock out the user during validation
      noClickingAllowed = true; //No user input during validation
      guessCounter++;
      guessCounterdiv.innerText = `Guesses: ${guessCounter}`;
      if (divValidator(arrayOfClickedDivs)){ //GOOD MATCH
        for (let loopdiv of arrayOfClickedDivs) {
          arrayOfFinishedDivs.push(loopdiv);// Add the clicked divs to the master list of finished divs
          loopdiv.style.outline = "thick solid #FFFFFF";
        }
        arrayOfClickedDivs = []; // Empty the list of currently clicked divs
        noClickingAllowed = false; //Give their ability to click back to them
        if (arrayOfFinishedDivs.length >= COLORS.length){
          console.log(`Game finished! Score: ${guessCounter}`);
          var bestScore = JSON.parse(localStorage.getItem("bestscore") || -1);
          if (guessCounter < bestScore || bestScore == -1){
            console.log(`NEW BEST SCORE`);
            localStorage.setItem("bestscore", JSON.stringify(guessCounter));
            bestScorediv.innerText = `Best score: ${guessCounter}`;
          }
          restartGameButton.style.display = "block"; //Show the button to restart the game
        }

      }else{ //BAD MATCH
        //console.log ("BAD MATCH!");
        setTimeout(function(){ // Give their ability to click back after a timeout
          for (let loopdiv of arrayOfClickedDivs) {
            loopdiv.style.backgroundColor = "";
          }
          arrayOfClickedDivs = []; // Empty the list of currently clicked divs
          noClickingAllowed = false; 
        }, 1000);
      }
    }
  }

}

function divValidator(divs){ //Intentionally setup to check more than two if I want
  var validationCondition;
  var success = true; //Default to true, set to false for any negatives

  for (var i = 0; i < divs.length; i++){
    if (i == 0){ //If its the first object, record the value
      validationCondition = divs[i].dataset.color; // CHANGE THE VALIDATION HERE TO WHATEVER YOU WANT. COLOR, URL FOR PICTURES/GIFS, ETC
    }else{ //All other values, check against the first
      if (divs[i].dataset.color !== validationCondition){
        success = false;
      }
    }
  }
  return success;
}

const form = document.querySelector("form");
form.addEventListener("submit", function(event){ //Sets the restart game button to reload the page
  location.reload();
})
function startGame(){
  // when the DOM loads
  startGameButton.style.display = 'none';
  howManySetsRange.disabled = true;
  howManyInEachSetRange.disabled = true;
  easyButton.disabled = true;
  mediumButton.disabled = true;
  hardButton.disabled = true;
  debugCheckbox.disabled = true;
  tempCOLORS = 
    [
      "red",
      "orange",
      "yellow",
      "lime",
      "blue",
      "purple",
      "brown",
      "white",
      "magenta",
      "plum",
      "aqua",
      "grey",
      "black",
    ];

  var realCOLORS = getRandom(tempCOLORS, howManySetsRange.value); // Grab a random set of the colors, based on how many colors the user wander

    
COLORS = COLORS.concat(realCOLORS);
COLORS = COLORS.concat(realCOLORS);




  //This section of code adds extra sets if the cards are in sets greater than
  if (howManyInEachSetRange.value > 2){
    REALClickableCards = howManyInEachSetRange.value;
    var doublechecker = REALClickableCards;
    while (doublechecker > 2){ // Add new cards 
      COLORS = COLORS.concat(realCOLORS); // Added this to double up the list
      doublechecker--;
    }
  }else{ // If its below 2//// 
    REALClickableCards = 2;
  }
  restartGameButton.style.display = "block"; //Show the button to restart the game


  let shuffledColors = shuffle(COLORS);
createDivsForColors(shuffledColors);
}

//Grabbed from 
//https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
function getRandom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

//howManySetsRange
function updateHowManySets(){
  howManySetsLabel.innerText = `${howManySetsRange.value}`;
  updateSettingsInMemory();
}

//howManyInEachSetRange
function updateHowManyInEachSet(){ //
  howManyInEachSetLabel.innerText = `${howManyInEachSetRange.value}`;
  updateSettingsInMemory();
}

function updateSliders(){
  updateHowManySets();
  updateHowManyInEachSet();
}

function updateSettingsInMemory(){
  //localStorage.setItem("TodoListStorage", JSON.stringify(listOfTODOsLocally));
  localStorage.setItem("howManySetsRange", JSON.stringify(howManySetsRange.value));
  localStorage.setItem("howManyInEachSetRange", JSON.stringify(howManyInEachSetRange.value));
  }

function difficultySelector(difficulty){
  switch(difficulty){
    case "easy":
      howManySetsRange.value = 3;
      howManyInEachSetRange.value = 2;
      break;
    case "medium":
      howManySetsRange.value = 5;
      howManyInEachSetRange.value = 3;
      break;
    case "hard":
      howManySetsRange.value = 8;
      howManyInEachSetRange.value = 5;
      break;
  }
  updateSliders();
}

function debugmodechange(){
  localStorage.setItem("debugstate", JSON.stringify(debugCheckbox.checked));
  debugState = debugCheckbox.checked;
}












