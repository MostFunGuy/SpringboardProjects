//Record objects on the screen we need
const newTODOAcceptButton = document.getElementById("newTODOAcceptButton");
const newTodoText = document.getElementById("newTodoText");
const newTodoPriorityRange = document.getElementById("newTodoPriorityRange");
const newTodoPriorityLabel = document.getElementById("newTodoPriorityLabel");
const ulOfTODOs = document.getElementById("ulOfTODOs");

//const localStorageMemBase = "TodoList"; // Thought I'd need this, but came up with a better solution

//var listOfTODOsLocally = new Array();
var listOfTODOsLocally = [];

const todosHeaderText = document.querySelector('h1');
const form = document.querySelector("form");

// Accept button pressed
form.addEventListener("submit", function(event){
    event.preventDefault();
    var listOfErrors = [];
    if (newTodoText.value.replace(/\s/g, '') == ""){ // If the input box is empty, or just contains spaces, stop the user
        listOfErrors.push("The TODO textbox cannot be empty!")
    }

    //Error creation done, progress either the error messages or the real content
    if (listOfErrors.length > 0){ // If the error list contains anything
        alert(`Errors found: \r\n${listOfErrors}`);
    }
    else{
        //Else add the new TODO!
        addNewTodo(true, newTodoText.value, convertPriority(newTodoPriorityRange.value), false, new Date());
    }
  })


function addNewTodo(recordinarray, targetText, targetPriority, dateCreated, isCompleted, newIndex){
    
    const ulOfTODOs = document.getElementById("ulOfTODOs");
    
    var newTODOLI = document.createElement('li'); // List element itself
    
    var newCheckbox = document.createElement("input"); // Checkbox, for mass changes (Not required, but seemed good)
    newCheckbox.type = "checkbox";

    var newTODOButton = document.createElement("button"); // Button, for individual deletions
    newTODOButton.innerText = "Delete";

    var newText = document.createTextNode(` ${targetText} `);


    newTODOLI.append(newCheckbox);
    newTODOLI.append(newText);
    newTODOLI.append(newTODOButton);

    ulOfTODOs.appendChild(newTODOLI);

    newTODOLI.addEventListener('click',function(event){ // CLICK ON TEXT FUNCTION
        //Took this from the solution, I was trying to get a click functionality separate on the text, wouldn't go
        const targetTagToLowerCase = event.target.tagName.toLowerCase();
        
        if (targetTagToLowerCase === "li") {
            //isCompleted
            const index = event.target.parentElement.dataset.index;
            if (index > -1) { // If the index is valid
                if (listOfTODOsLocally[index].isCompleted){
                    event.target.style.textDecoration = "";
                }else{
                    event.target.style.textDecoration = "line-through";
                }
                listOfTODOsLocally[index].isCompleted ^= true; //Invert the save
                updateLS();
                setupPageFromMemory(true);
            }
        }

        // DELETE FUNCTION
        else if (targetTagToLowerCase === "button") {
            event.target.parentElement.remove();
            //Record how many TODOs are here. TODO: Update how many are done vs. not done
            updateTODOHeaderNum();
            //Get the index of what was clicked
            const index = event.target.parentElement.dataset.index;
            //Remove said item
            if (index > -1) { // If the index is valid
                listOfTODOsLocally.splice(index, 1);
            }
            updateLS();
            setupPageFromMemory(true);
    }
    });
    // Unsure if there's a "correct" way to format new objects
    var TODOItem = {
        text:targetText,
        priority:targetPriority,
        dateCreated:dateCreated,
        isCompleted:isCompleted
    };
    
    if (recordinarray){ // Only record into memory if its not the page load, and called from the button
        listOfTODOsLocally.push(TODOItem);
        //Update local variable, then store said variable in memory
        newTodoText.value = ""; // Empty the textbox to allow the next input to be added
        updateLS();
    }
    
    //Record the index for later use
    newTODOLI.dataset.index = newIndex; // Record the TODOItem object into the LI for later use

    newText.title = "test"
    updateTODOHeaderNum();
}

function clearEntireList(){
    ulOfTODOs.innerText = "";
}
function updateLS(){
    localStorage.setItem("TodoListStorage", JSON.stringify(listOfTODOsLocally));
}

document.addEventListener("DOMContentLoaded", function(event){
    setupPageFromMemory(false);
  });

function setupPageFromMemory(clearFirst){ // clearFirst variable determines whether or not to wipe the list first (for list refreshes without refreshing the page)
    
    updatePriorityValue();

    if (clearFirst){
        clearEntireList();
    }
    // Either way, this should run after
    
    //listOfTODOsLocally = JSON.parse(localStorage.getItem("TodoListStorage"));
    //This returns an empty list, instead of null, if localstorage is empty 
    //From: https://stackoverflow.com/questions/43762363/how-to-store-an-array-of-objects-in-local-storage
    listOfTODOsLocally = JSON.parse(localStorage.getItem("TodoListStorage") || "[]");
    // if (listOfTODOsLocally == null){
    //     listOfTODOsLocally = new Array();
    // }


    listOfTODOsLocally.forEach(e => addNewTodo(false, e.text, e.priority, e.dateCreated, e.isCompleted, listOfTODOsLocally.indexOf(e)));  

    //Record how many TODOs are here. TODO: Update how many are done vs. not done
    updateTODOHeaderNum();
}

function updateTODOHeaderNum(){
    var numOfTODOs = 0;
    if (listOfTODOsLocally == null){
        numOfTODOs = 0;
    }
    else{
        numOfTODOs = listOfTODOsLocally.length;
    }
    todosHeaderText.innerText = `Todos (${numOfTODOs})`;
}

function convertPriority(targetNumber){
    return 11 - targetNumber;
}

function updatePriorityValue(){

    const displayNum = convertPriority(newTodoPriorityRange.value);
    //console.log(displayNum); // Debug
    newTodoPriorityLabel.innerText = `${displayNum}`;
    return displayNum;
}