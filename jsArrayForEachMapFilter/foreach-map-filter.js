/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    //Declare the return array
    var newArr = [];
    //Loop each element
    arr.forEach(element => {
        //Adding double it to the new array
        newArr.push(element * 2);
    });
    //Return the NEW array
    return newArr;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    //Declare the return array
    var newArr = [];
    //Loop each element
    arr.forEach(element => {
        //Only add the element if it is divisble by 2 without a remainder (AKA even)
        if (element%2 == 0){
            newArr.push(element);
        }
    });
    //Return the NEW array
    return newArr;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    //Declare the return array
    var newArr = [];
    //Loop each element
    arr.forEach(element => {
        //Return a new string, using ONLY the first and last letters of the loop-element
        newArr.push(`${element[0]}${element[element.length - 1]}`);
    });
    //Return the NEW array
    return newArr;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    //Loop each element
    arr.forEach(function(val) {
        val[key] = value;
    });
    //Return the NEW array
    return arr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel
 and the values as the number of times the vowel appears in the string. This function should be case insensitive 
 so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
    //split the target string
    let strArray = str.split("");
    //Declare vowels
    const vowelString = "aeiou";
    // Make empty object to eventually fill and return
    let returnObject = {};

    strArray.forEach(function(letter) {
        let lowerCasedLetter = letter.toLowerCase()
        if (vowelString.indexOf(lowerCasedLetter) !== -1) {
        if (returnObject[lowerCasedLetter]) {
            returnObject[lowerCasedLetter]++;
        } else {
            returnObject[lowerCasedLetter] = 1;
        }
        }
    });
    return returnObject;
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    return arr.map( function (loopValue){
        return loopValue * 2;
    });
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    return arr.map( function (loopValue, indexValue){ // Unsure if index is a reserved term
        return loopValue * indexValue;
    });
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    return arr.map( function (loopValue){
        return loopValue[key];
    });
}


/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    return arr.map( function (loopValue){
        return `${loopValue.first} ${loopValue.last}`;
    });
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    return arr.filter( function (loopValue){
        if (loopValue[key] == true){
            return loopValue;
        };
    });
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    return arr.filter( function(loopValue) {
      return loopValue === searchValue;
    })[0]; // the "0" returns the first value found, regardless of how many there are, and undefined if none are found
  }
/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    return arr.filter( function(loopValue) {
      return loopValue[key] === searchValue;
    })[0]; // the "0" returns the first value found, regardless of how many there are, and undefined if none are found
  }
/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    // Declare vowels to remove, only lower case as the question asks to return only lower case
    const vowels = "aeiou";
    // Set to lower case, as the question asks
    str = str.toLowerCase()
    //Split it into an array
    str = str.split("")
    return str.filter( function(loopValue){
        return vowels.indexOf(loopValue) === -1;
    }).join(""); // Join the returns together to return a string instead of an array
  }

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    var newArray = [];
    arr.forEach(element => {
        if (element % 2 !== 0){
            newArray.push(element * 2);
        }
    });
    return newArray;
}