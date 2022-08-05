// Acceptance Criteria
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// Landing page
  // I need a start button
  // Description of the app: welcome to my quiz this is how it works 
  // I need an event listener on start button -- listening for clicks
  // When you click the start button the landing page disappears and the first questions
  // and answers appears and the timer appears and starts counting down.
  // I need a set of questions -- array of objects
  // 
// What do the questions need to include
//  Question text -- data type? string
//  Set of answers -- data type? array of strings
//  Some way to check whether the answer is correct -- 
// give the sting or the index of the correct answer
//  some way to track whether the answer the user selected is the correct answer 
// -- does not need to be with the other question info
// Need a way to display the question text, answers and the answers need to be clickable
// When you click on an answer
  // Compares the answer you chose to the correct answer
  // Displays some kind of feedback based on whether the selceted answer is correct or incorrect
  // If the answer is incorrect, time is subtracted
  //  Regardless whether the answer is correct or incorrect,
  // the current question disappears and the next question appears unless the user is on the final question
  // if the user is on the last question once the select an answer, They're presented with a form to enter theier initials.
  // Initials and remaining time is saved to local storage as the score
  // Game ends when all questions are answered or the timer reaches 0 -- is ther a case where the timer might go lower than 0 that needs to be accounted for
  
console.log("hello")