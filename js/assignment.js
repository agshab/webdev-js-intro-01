"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const bookAnswerEl = document.getElementById("book-answer");
const activityAnswerEl = document.getElementById("activity-answer");
const submissionBtn = document.getElementById("submission-btn");

// Declare a constant variable named "book" and assign
// the name of your favorite book to that variable.
const book = "The Great Gatsby";

// Declare a mutable variable named "activity" and assign
// an activity to it.
let activity = "Reading";

// Function to update the book sentence
function updateBookSentence() {
    // Sets the text inside the element with the id of book-answer
    bookAnswerEl.innerText = "My favorite book is: " + book;
}

// Function to update the activity sentence
function updateActivitySentence() {
    // Sets the text inside the element with the id of activity-answer
    activityAnswerEl.innerText = "My favorite activity is: " + activity;
}

// Function to render the updated sentences
function render() {
    updateBookSentence();
    updateActivitySentence();
}

// Event listener to call the render function when the button is clicked
submissionBtn.addEventListener("click", function () {
    render();
});
