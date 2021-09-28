"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

const submitStoryFormButton = document.getElementById("submitStoryFormButton");
const submitTitle = document.getElementById("submitTitle");
const submitURL = document.getElementById("submitURL");
const submitAuthor = document.getElementById("submitAuthor");

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage(storyList.stories);
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
  console.debug("navLoginClick", evt);
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

function submitStoryFormButtonClick() {
  // If the user is logged out
  if (!currentUser) {
    // I tried to get the login screen to popup if you're not logged in, but I couldn't get it to work
    navLoginClick();
    // Yell at the user in the console. Maybe this should be an alert?
    console.log("Not logged in, can't submit!");
    return;
  }
  // If it's hidden
  if (submitStoryFormButton.style.display == "none") {
    // Unhide it
    submitStoryFormButton.style.display = "";
    // Else if it's not currently hidden
  } else {
    // Hide it
    submitStoryFormButton.style.display = "none";
  }
}

function viewOnlyFavoritesButtonClick() {
  //
  putStoriesOnPage(currentUser.favorites);
}
