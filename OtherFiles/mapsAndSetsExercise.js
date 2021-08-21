// Maps and Sets Exercise
// Quick Question #1
// What does the following code return?

// new Set([1,1,2,2,3,4])
// ANSWER: "Set(4) {1, 2, 3, 4}"
// ANSWER: Because a set cannot have duplicate values, so it will only register unique values 



// Quick Question #2
// What does the following code return?

// [...new Set("referee")].join("")
// "ref"
// ANSWER: Because the set turns into "Set(3) {"r", "e", "f"}"
// ANSWER:    And the .join() combines the set values, with nothing in between, giving you "ref"



// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// ANSWER: Map(2) {Array(3) => true, Array(3) => false}
// ANSWER: The map has 2 different key value pairs because the keys come from the reference not the specifics, 
// ANSWER:    not the specifics, so passing the "same" array results in two different key value pairs being added



// hasDuplicate
// Write a function called hasDuplicate which accepts an array 
//    and returns true or false if that array contains a duplicate

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

function hasDuplicate(arr){
  const uniqueArr = [...new Set(arr)];
  if (uniqueArr.length == arr.length){ // If the new array contains the same size as the original,
    return false; // Then no, no duplicates found
  }
  return true; // Else yes it contains a duplicate, because the size changed
}




// vowelCount
// Write a function called vowelCount which accepts a string 
//    and returns a map where the keys are numbers 
//    and the values are the count of the vowels in the string.

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(targetString){
  let returnMap = new Map(); // Define the map object to pass back
  const vowels = "aeiou"
  //Loop all chracters from the parameter
  for(let char of targetString){
    let charToLower = char.toLowerCase();
    if (vowels.includes(charToLower)){ // If the loop character is a vowel
      if (returnMap.has(charToLower)){ // If this vowel was already found
        returnMap.set(charToLower, returnMap.get(charToLower) + 1); // increment it
      }else{
        returnMap.set(charToLower, 1);// otherwise, start it at 1, since its the first found
      }
    }
  }
  return returnMap; // Return the object
}



