"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories(); //.then(function () {
  $storiesLoadingMsg.remove();
  //console.log(`Inside the .then`);
  putStoriesOnPage(storyList.stories);
} //);} // Only used if the .then was in place

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story) {
  //console.debug("generateStoryMarkup", story);

  let dataStr = localStorage.getItem("tasks");
  //console.log(dataStr);
  let parsedTasksData = JSON.parse(dataStr);

  const hostName = story.getHostName();

  let delMarkup = ""; // Default to blank markup. Keeps it if the user isn't the story's owner
  //console.log(currentUser);
  if (currentUser.ownStories.includes(story)) {
    //console.log(`Self owned story`);
  }
  // I shouldn't need this, but this is the only way it would work... ?
  if (currentUser.name.toUpperCase() == story.username.toUpperCase()) {
    //console.log(`Self owned story`);
    delMarkup = `<small class="delete-text">Click to delete</small>`;
  }

  let favMarkup = "";
  // If the user is not logged on, or if the story isn't in their favorites list
  // if (!currentUser || !currentUser.favorites.includes(story)) {
  //   favMarkup = `Add to Favourites`;
  // } else {
  //   favMarkup = `Remove from Favourites`;
  // }
  // Decided against a variable favorite text. Kept code just in case I changed my mind
  favMarkup = ``;

  let favHighlighting;
  //console.log(isFavorite);

  //let targetStory = getStoryFromID(story.storyId);
  // console.log(`Favorite Stories:`);
  // console.log(currentUser.favorites);
  // console.log(`targetStory: `);
  //console.log(story);

  //If the user is not logged on, or if the story isn't in their favorites list
  // if (!currentUser || !currentUser.favorites.includes(story)) {
  //   // Then don't include the highlighting
  //   favHighlighting = ``;
  //   // Otherwise, the user IS logged in and the story IS in the favourites list
  //   //console.log(`Favourite NOT found!`);
  // } else {
  //   // So include the class
  //   favHighlighting = `class="favorites"`;
  //   //console.log(`Favourite found!`);
  // }

  // If the story is favorited,
  if (currentUser.isFavorite(story)) {
    // Add the favorite class to the LI
    favHighlighting = `class="favorites"`;
  }

  return $(`
      <li id="${story.storyId}" ${favHighlighting} storyURL="${story.url}" storyHostname="${hostName}" storyAuthor="${story.author}" storyUser="${story.username}" storyTitle="${story.title}">
        <a href="${story.url}" target="a_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <small class="story-author">by ${story.author}</small>
        <small class="story-user">posted by ${story.username}</small> 
        <small class="favorite-text">Toggle favourite</small>
        ${delMarkup}
      </li>
      `);
}

function getStoryFromID(storyID) {
  let targetStory = false;
  for (let i = 0; i < storyList.stories.length; i++) {
    // If the loop-story's ID is the clicked ID, you have the right one
    //console.log(storyList.stories[i]);
    //console.log(storyList.stories[i].storyId);
    if (storyList.stories[i].storyId == storyID) {
      targetStory = storyList.stories[i];
      return targetStory;
    }
  }
}

function toggleFavClick(evt) {
  const author = evt.target.parentElement.getAttribute("storyAuthor");
  const title = evt.target.parentElement.getAttribute("storyTitle");
  const url = evt.target.parentElement.getAttribute("storyURL");
  const clickedID = evt.target.parentElement.getAttribute("id");

  let targetStory = getStoryFromID(clickedID);

  // If the clicked story is already a favorite
  if (currentUser.isFavorite(targetStory)) {
    // Remove the story from the favorites list
    removeFavorite(targetStory.storyId);

    // Remove the class highlighting from the parent element
    evt.target.parentElement.classList.remove("favorites");
    // Remove the story from the local list
    // Gotten from user "Peter Olson" at Stackoverflow:
    // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    for (var i = currentUser.favorites.length - 1; i >= 0; i--) {
      if (currentUser.favorites[i].storyId === targetStory.storyId) {
        currentUser.favorites.splice(i, 1);
        //console.log(`favorites list spliced`);
      }
    }
    // Otherwise, not currently a favorite
  } else {
    // Send the story to the server to mark it as a favorite
    addFavorite(clickedID);
    // Update the local list of favorites

    // If no story was found, this will be false. Otherwise, it will be a valid object and pass into it
    if (targetStory) {
      // console.log(`Found story:`);
      // console.log(targetStory);
      // Pass the found story into the local list
      currentUser.favorites.push(targetStory); //DONE: Fix this to pass real stories, as opposed to fake ones
      //console.log(`Story added to favorites`);
      evt.target.parentElement.classList.add("favorites");
      //console.log(evt.target.parentElement);
      return;
    }
    console.log(
      `No story was found to pass into the local list. Shouldn't ever happen.`
    );
  }
}

function deleteStoryClicked(evt) {
  const clickedID = evt.target.parentElement.getAttribute("id");
  console.log(clickedID);
  deleteStory(clickedID);
  evt.target.parentElement.remove();
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage(whichStories) {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  //console.log(currentUser.favorites);
  let userFavIDs = getIDsfromStories(currentUser.favorites);
  // let currentStoriesIDs = getIDsfromStories(storyList);
  //console.log(`User's Favourite IDs:`);
  //console.log(userFavIDs);
  // console.log(`Server's passed Story IDs:`);
  // console.log(currentStoriesIDs);

  // loop through all of our stories and generate HTML for them
  //previously storyList.stories
  //console.log(whichStories);
  for (let story of whichStories) {
    // console.log(userFavIDs);
    // console.log(story.storyId);
    // console.log(`--------`);
    let isFavourite = userFavIDs.includes(story.storyId);
    const $story = generateStoryMarkup(story, isFavourite);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();

  // Set stories to be able to be favorited
  $(".favorite-text").on("click", toggleFavClick);

  // Set stories to be able to be deleted
  $(".delete-text").on("click", deleteStoryClicked);
}

function SubmitNewStoryButtonClicked() {
  /*
     const submitTitle = document.getElementById("submitTitle");
     const submitURL = document.getElementById("submitURL");
     const submitAuthor = document.getElementById("submitAuthor"); 
  */
  // let errorcheck = false;
  // for (let loopElement in { submitTitle, submitURL, submitAuthor }) {
  //   // If the image source input box is empty, or just contains spaces, stop the user
  //   const textToCheck = loopElement.value;
  //   console.log(textToCheck);
  //   if (`${loopElement.value}`.replace(/\s/g, "") == "") {
  //     errorcheck = true;
  //   }
  // }
  // if (errorcheck != false) {
  //   alert("Please fill in the Title, URL and Author");
  //   return;
  // }
  // At this point none of the boxes are empty
  //console.log();

  // Craft a story object to pass
  const newStorytoAdd = {
    title: submitTitle.value,
    author: submitAuthor.value,
    url: submitURL.value, // URL MUST BE A VALID URL FOR IT TO WORK
  };

  console.log(newStorytoAdd); // Log the story for testing
  storyList.addStory(currentUser, newStorytoAdd); // Add the story from the code we made earlier
  clearFormInputs();
}

function clearFormInputs() {
  submitTitle.value = "";
  submitAuthor.value = "";
  submitURL.value = "";
}

function getIDsfromStories(targetStories) {
  let returnArray = [];
  for (let loopStory in targetStories) {
    returnArray.push(loopStory.storyId);
  }
  return returnArray;
}

// Default values while testing
submitTitle.value = "Test Story Title";
submitAuthor.value = "Test Story Author";
submitURL.value = "http://google.com";
