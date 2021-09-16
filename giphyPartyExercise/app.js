




console.log("Richard Thompson's Version!");
// //Record objects on the screen we need

// Inputs from the page
const searchInput = document.getElementById("searchInput");
const searchAcceptButton = document.getElementById("searchAcceptButton");
const removeImagesButton = document.getElementById("removeImagesButton");
const gifsGoHereDiv = document.getElementById("gifsgoherediv");

// Etc
const form = document.querySelector("form");



// Accept button pressed
form.addEventListener("submit", function(event){
    event.preventDefault(); // Prevent the form from reloading the page
    var listOfErrors = [];
    if (searchInput.value.replace(/\s/g, '') == ""){ // If the image source input box is empty, or just contains spaces, stop the user
        listOfErrors.push("You must specify a search term")
    }
    // Error array creation done, progress either the error messages or the real content
    // Error array and handler pulled from my Assessment 1, Meme generator
    if (listOfErrors.length > 0){ // If the error list contains anything
        alert(`Errors found (${listOfErrors.length}): \r\n${arrayIntoParsedText(listOfErrors, true, ": ", "\n")}`);
    }
    else{ //No errors found, proceed!
        console.log(`Searching the term "${searchInput.value}"`)
        fetchGif(searchInput.value);
        //searchInput.input = ""; // Clear the search? Not sure I like that
    }
});

//Turns an array of strings into a parsed, numbered string with newlines and characters in between. Customizable
function arrayIntoParsedText(targetArray, numbered, numberedChar, newlineChar){
    var returnString = "";
    for (var i=0; i<targetArray.length; i++)
    {
        if (i != 0){ // if NOT first value, add a newline
            returnString = returnString.concat(`${newlineChar}`);
        }
        if (numbered){
            returnString = returnString.concat(`${i + 1}${numberedChar}`);
        }
        returnString = returnString.concat(`${targetArray[i]}`); // Add the actual error text
    }
    return returnString;
}

//MFG giphy API key: 0IjljI12IfIGLrC4DlzU0bZY0YJAkA0P
async function fetchGif(searchInput){
    // Giphy's API: https://developers.giphy.com/docs/api/endpoint
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchInput // What the user inputed
           ,api_key: "0IjljI12IfIGLrC4DlzU0bZY0YJAkA0P" // My (MostFunGuy)'s giphy API key Key
                    //0IjljI12IfIGLrC4DlzU0bZY0YJAkA0P // Richard's listed key
                    //MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym // Springboard's listed key
           ,rating:"pg-13" // Safetyify the results for reasonably SFW results
        }});
    postGif(response.data);
    //console.log(response);
}

function postGif(response){
    console.log(response); // log it as requested 
    console.log(response.data.length); // How many results?
    if (response.data.length){ // Validate that the data is good
        const randomIndex = Math.floor(Math.random() * response.data.length); // Grab a random index from the results
        gifURL = response.data[randomIndex].images.original.url
        // console.log(gifURL); // Validated good
        var newElement = document.createElement("img");
        newElement.setAttribute("src", gifURL);
        // newElement.setAttribute("height", "1024");
        // newElement.setAttribute("width", "1024");
        
        newElement.id = guidGenerator();
        //console.log(newElement.id); // Validated good: 67a7d0a6-9ad6-81ff-4c89-79af83da0d9c

        gifsGoHereDiv.appendChild(newElement);

    }

}

// Function pulled from user "broofa" from stackoverflow:
// https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    
}

function removeAllImages(){
    gifsGoHereDiv.remove(); // Validated good
}



// I heavilly used the Springboard working example, as getting the API to accept the request was rough


// #####################################################################
// #####################################################################

//                       SPRINGBOARD's VERSION

// #####################################################################
// #####################################################################


//console.log("Springboard's Version!");
// const $gifArea = $("#gifsGoHereDiv");
// const $searchInput = $("#searchInput");

// /* use ajax result to add a gif */

// function addGif(res) {
//   let numResults = res.data.length;
//   console.log(numResults);
// //   if (numResults) {
// //     let randomIdx = Math.floor(Math.random() * numResults);
// //     let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
// //     let $newGif = $("<img>", {
// //       src: res.data[randomIdx].images.original.url,
// //       class: "w-100"
// //     });
// //     $newCol.append($newGif);
// //     $gifArea.append($newCol);
// //   }
// }

// /* handle form submission: clear search box & make ajax call */

// $("form").on("submit", async function(evt) {
//   evt.preventDefault();

//   let searchTerm = $searchInput.val();
//   $searchInput.val("");

//   const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
//     params: {
//       q: searchTerm,
//       api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
//     }
//   });
//   addGif(response.data);
// });

// /* remove gif */

// $("#removeImagesButton").on("click", function() {
//   $gifArea.empty();
// });
























