/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. 
  The function should return the first object with the key of username that matches the string passed to the function. 
  If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
  // Use a find array to locate the first user
  return usersArray.find( function(loopUser){
    // Return a user who has the same username key as the argument originally passed in
    return loopUser.username === username;
  });
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  var targetindex = usersArray.findIndex( function(loopUser){
    // Return the user's index
    return loopUser.username === username;
  })
  // If a user was found, return the modified array
  if (targetindex !== -1){
    // Use that index to return a modified array
    return usersArray.splice(targetindex,1)[0];
  }
  // Return undefined if no user was found
  return undefined;
}