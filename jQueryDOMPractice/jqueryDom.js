// First jquery attempt

/*
When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
Remove the last paragraph in the article.
Set the font size of the title to be a random pixel size from 0 to 100.
Add an item to the list; it can say whatever you want.
Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
Add an event listener so that when you click on the image, it is removed from the DOM.
*/




//When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”

document.addEventListener("DOMContentLoaded", function(event){ // Once the page loads
    console.log(`Let’s get ready to party with jQuery!`);
});



//Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$("article img").addClass("image-center");


//Remove the last paragraph in the article.
$("article").children().last().remove()

//Set the font size of the title to be a random pixel size from 0 to 100.
//$(`#title`); // Gets the title
$("#title").css("font-size", Math.random()*100); 

//Add an item to the list; it can say whatever you want.
$("ol").append($("<li>", {text: "Jquery is OP"}));


//Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$("aside").empty().append($("<p>", {text: "What's an aside?"}));


//When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
//I realize "input" probably isnt the sharpest selection here, but there's only three inputs and I'm trying to touch all three
// $("#form-control").on('input', function () { 
//     console.log("changed");
// });

// $(document).on('keyup mouseup', '#form-control', function() {                                                                                                                     
//     console.log('changed');
// });

// $('.form-control').on('change keyup', function() { // Triggers for all three number inputs
//     $("body").css("background-color",
//     "rgb("
//         + $(".form-control")[0].val() + "," 
//         + $(".form-control")[1].val() + ","
//         + $(".form-control")[2].val() + ")"
//     ); // Close out the RGB, then the .css method
// }); 
// ^ This failed because the jquery selectors didn't like to play nice with the text combinators

$('.form-control').on('change keyup', function() { // Triggers for all three number inputs
    let r = $(".form-control").eq(0).val(); // I learned that .first.next.next.next doens't work, rip
    let b = $(".form-control").eq(1).val();
    let g = $(".form-control").eq(2).val(); // Remember, isntead of RGB, they ordered it red blue green
    console.log("rgb(" + r + "," + g + "," + b + ")");
    $("body").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}); 





//Add an event listener so that when you click on the image, it is removed from the DOM.
$("img").on('click', function (evt) { // On any click of any image
    $(evt.target).remove(); // Straight up Remove the element 
});



