function countDown(numberToDec){
    const originalvalue = numberToDec;
    var variablevalue = numberToDec;
    if (numberToDec <= 0 ||isNaN(numberToDec)){ //If the input is not a number, or if it's less than or equal 0, throw an error and stop there
        console.log("Error: Please enter a positive number");
    }
    else{ //If it reaches this, it should be a valid number input
        // // setInterval(checkDecrement, 1000); BAD CODE, COULDNT PASS PARAMETER
        // (WRONG) Learned you can't pass parameters in setInterval functions, instead you have to make an anon function (WRONG)
        // Source: https://stackoverflow.com/questions/457826/pass-parameters-in-setinterval-function
        // Example: setInterval( function() { funca(10,3); }, 500 );

        // CLARIFY: Turns out you can pass params in setInterval functions, you simply add them as extra parameters in the function
        // Source: https://www.w3schools.com/jsref/met_win_setinterval.asp
        // Example: setInterval(function, milliseconds, param1, param2, ...)


        var timerlength;
        if (originalvalue < 1){ // Already checked for greater than 0, so no need here
            timerlength = originalvalue * 1000; // If they specify
        }else{
            timerlength = 1000;
        }
        
        console.log(`${variablevalue} seconds remaining...`); //Initial announcement
        var intervalID = setInterval(function(){
            variablevalue--; // Decrement the number, to track and display 
            if (variablevalue <= 0){
                console.log(`Done! ${originalvalue} seconds have passed.`)
                clearInterval(intervalID); //Clear the interval, so it doesn't continue
            }
            else{
                console.log(`${variablevalue} seconds remaining...`);
            }
        }, timerlength); //End of setInterval, time between runs
    }
};
//I should account for non whole numbers that are greater than 1, but this is fine for now. 




function randomGame(){ // No parameters needed

    const secondsBetweenRuns = 1
    var attempts = 0;
    var intervalID = setInterval(function(){
        var randomNumber = Math.random();
        attempts++; // Increment attempt count every time a new number is generated
        console.log(randomNumber);
        if (randomNumber > 0.75){
            console.log(`Done! It took ${attempts} attempts to find a number greater than .75`);
            clearInterval(intervalID); //Clear the interval, so it doesn't continue
        }else{
            console.log(`Nope! ${randomNumber} is not greater than .75`);
            // Intentionally empty. Should we have a waiting message?
        }
    }, secondsBetweenRuns * 1000); //End of setInterval, time between runs
}