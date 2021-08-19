//Given This:

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//         return num % 2 === 0
//     });
// }

/* Write an ES2015 Version */
const filterOutOddsX = (...arguments) => arguments.filter(num => num % 2 == 0)


/*
findMin
Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator.
*/

const findMin = (...arguments) => Math.min(...arguments);




/*
mergeObjects
Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
*/

const mergeObjects = (object1, object2) => ({...object1, ...object2});



/*
doubleAndReturnArgs
Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
The function should return a new array with the original array values and all of additional arguments doubled.
*/

const doubleAndReturnArgs = (array, ...arguments) => [...array, ...arguments.map(x => x * 2)];



/*
Slice and Dice!
For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

Make sure that you are always returning a new array or object and not modifying the existing inputs.
*/


/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    // Select a random index to remove 
    let selectedIndex = Math.floor(Math.random() * (items.length));
    // Remove the selected element, passing back the array in a new object, using spread as the instructions say
    return [...Array.Array.items.slice(0, selectedIndex), ...slice.items.slice(selectedIndex + 1)];
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    // Simply combine the arrays into a new array by using spread
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    // Create a fresh object for returning
    let returnObject = {...obj}
    // Add the new key/value pair to it
    returnObject[key] = val
    // Full send
    return returnObject;
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    // Create a fresh object for returning
    let returnObject = {...obj}
    // remove the key/value from the object based on the key given:
    delete returnObject[key];
    // Full send
    return returnObject;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    // Simply combine the objects into a new object by using spread, and return it
    return [...obj1, ...obj2];
}


/** Return a new object with a modified key and value. */

// Same as addKeyVal()
const update = (obj, key, val) => {
    // Create a fresh object for returning
    let returnObject = {...obj}
    // Modify the key/value pair to based on the parameters
    returnObject[key] = val
    // Full send
    return returnObject;
}