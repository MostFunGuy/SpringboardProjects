/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr) {
    return arr.some(function(loopValue){
        // Return true if the remainder is not zero, aka odd number
        return loopValue % 2 !== 0;
    });
}

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(num) {
    // Convert to string
    var convertedStr = num.toString();
    // Convert the string to an array of characters by splitting on nothing
    var splitStr = convertedStr.split("");
    return splitStr.some(function(loopValue){
        // Return true a zero is found
        return loopValue == "0";
    });
}

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/
// Literally the odd excercise from above, but swapped to "every" instead of "some" and check if the remainder is 0
function hasOnlyOddNumbers(arr) {
    return arr.every(function(loopValue){
        // Return true if the remainder is not zero, aka odd number
        return loopValue % 2 !== 0;
    });
}

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr) {
    return arr.every(function(loopValue){
        // Evaluate whether the loop value's last index is the same as the current index
        return arr.indexOf(loopValue) === arr.lastIndexOf(loopValue);
    });
  }
/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

function hasCertainKey(arr, key) {
    return arr.every(function(loopValue){
        // Simply return a boolean whether that key exists in the loop value
        return key in loopValue;
    })
}
/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/
// Almost the same code as hasCertainKey(), but we check for the key
function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(loopValue){
        // Simply return a boolean if the loopvalue contains that specific key-value pair 
        return loopValue[key] === searchValue;
    })
}