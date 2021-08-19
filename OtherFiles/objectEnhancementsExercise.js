// Same keys and values
// function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }
// Same keys and values ES2015

/* Write an ES2015 Version */


function createInstructor(firstName, lastName){
    return {
        //Simply use the variable names, it will know you want the property named this and use the value as well
        firstName,
        lastName
    }
  }



//   Computed Property Names
//   var favoriteNumber = 42;
  
//   var instructor = {
//     firstName: "Colt"
//   }
  
//   instructor[favoriteNumber] = "That is my favorite!"
//   Computed Property Names ES2015
  /* Write an ES2015 Version */

  // Use let, not var
let favoriteNumber = 42;

  // Again, let
let instructor = {
    firstName:"Colt",
    // Simply use the variable names, it will know you want the property named this and use the value as well
    [favoriteNumber]:"That is my favorite!"
    };


// Object Methods
//     var instructor = {
//         firstName: "Colt",
//         sayHi: function(){
//             return "Hi!";
//         },
//         sayBye: function(){
//             return this.firstName + " says bye!";
//         }
//     }
//     Object Methods ES2015
    /* Write an ES2015 Version */

// I changed the name so it would correctly compile and I could test using the browser
let instructoragain = {
    firstName: "Colt",
    // No need for the function keyword, and there are no parameters for either function
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
}

    
// createAnimal function
// Write a function which generates an animal object. The function should accepts 3 arguments:

//     species: the species of animal (‘cat’, ‘dog’)
//     verb: a string used to name a function (‘bark’, ‘bleet’)
//     noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

// Use one or more of the object enhancements we’ve covered.

function createAnimal(species, verb, noise){
    return{
        // No need to specific the content, it knows
        species,
        // noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
        // No need for the function keyword
        [verb](){
            return noise;
        }

    }
}













































