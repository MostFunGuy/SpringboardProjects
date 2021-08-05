/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
    return arr.reduce( function(accumulator, nextValue){
        // Add the next value to the result, using the key given
        accumulator.push(nextValue[key]);
        return accumulator;
    }, []); // Instantiate it with an empty array to start
}

/*
Write a function called vowelCount which accepts a string and 
returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. 
This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
    //Record vowels for use
    const vowels = "aeiou";
    //Split the incoming parameter into an array
    var strSplit = str.split("");
    //Save it to a variable so I can print it and return it
    return strSplit.reduce(function(accumulator, nextValue){
        //Set the next character to lower case, to catch both upper and lower case letters
        var lowerCaseLetter = nextValue.toLowerCase();
        //If true, the letter exists in the vowel count
        if (vowels.indexOf(lowerCaseLetter) !== -1) accumulator[lowerCaseLetter] = accumulator[lowerCaseLetter] + 1 || 1; // My first single line if statement ever, just so you know
        return accumulator;
    }, {}); // Start the reduce with an empty object 
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(accumulator, nextValue, i){
        //Using the index and the key, set the value parameter
        accumulator[i][key] = value;
        //Always pass the accumulator back
        return accumulator;
    }, arr) // Start the reduce with the arr parameter
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. 
The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true,
    the value should be placed in the first subarray. 
If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    //Always use the reduce method when in the reduce section of the curriculum
    return arr.reduce(function(accumulator, nextValue){
        //The partition function should run the callback function on each value in the array
        if (callback(nextValue)){
            //and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. 
            accumulator[0].push(nextValue);
        }
        else{
            //If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 
            accumulator[1].push(nextValue);
        }
        //accumulator[!callback(nextValue)].push(nextValue); // I tried to get fancy with this, but couldn't get it working. Its probably for the best
        return accumulator;
    }, [[],[]]);
}
