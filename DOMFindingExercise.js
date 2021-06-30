//Assignment 4.2.17: DOM Finding Exercise



// 1. Select the section with an id of container without using querySelector.
var idContainer = document.getElementById("container"); //Only element with ID of "container"

// 2. Select the section with an id of container using querySelector.
var idContainer2 = document.querySelector("#container"); //same as above, just with queryselector

// 3. Select all of the list items with a class of “second”.
var listItemsClassSecond = document.getElementsByClassName("second");

// 4. Select a list item with a class of third, but only the list item inside of the ol tag.
var listItemClassThirdOL = document.querySelector("ol .third") //ol is just the ordered list. is for the class

// 5. Give the section with an id of container the text “Hello!”.
idContainer.innerText("HELLO!"); // Already had the element saved from number 4

// 6. Add the class main to the div with a class of footer.
var divClassofFooter = document.getElementsByClassName("footer")[0]; //Get the first element with class "footer"
divClassofFooter.classList.add("main"); // Could just be done in one line, but we'll keep it two

// 7. Remove the class main on the div with a class of footer.
divClassofFooter.classList.remove("main");

// 8. Create a new li element.
var liAddMe = document.createElement("li");

// 9. Give the li the text “four”.
liAddMe.innerText("four");

// 10. Append the li to the ul element.
var targetUL = idContainer.firstChild(); //Get the unordered list from the ID container
targetUL.appendchild(liAddMe);

// 11. Loop over all of the lis inside the ol tag and give them a background color of “green”.
var targetOL = document.querySelectorAll("ol li");
for(let i = 0; i < targetOL.length; i++){
    targetOL[i].style.backgroundColor = "green";
}

// 12. Remove the div with a class of footer
var targetFooter = document.getElementsByClassName("footer");
targetFooter.remove();