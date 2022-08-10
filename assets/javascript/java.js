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

var timer = document.querySelector("#timer")
var questions = document.querySelector("#questions")
var answers = document.querySelector("#answers")
var startButton = document.querySelector("#start")
var main = document.querySelector("#main")
var intro = document.querySelector(".divQuizIntro")
var startButton = document.querySelector(".startButton")

// questions
var questionObject = [
  {
    name: "question1",
    query: "Which emotion is Agent Powers incapable of feeling?",
    selection: ["Sorrow", "Happiness", "Humor", "Empathy"],
    answer: "Humor",
  },
  {
    name: "question2",
    query: "How much does Waddles the pig weigh when Mable first meets them?",
    selection: ["15kg", "20kg", "15lbs", "20lbs"],
    answer: "15lbs",
  },
  {
    name: "question3",
    query: "What manner of weaponry was eventually used to kill the zombies?",
    selection: ["Battleaxe", "Boring bedtime stories", "An armchair", "Karaoke"],
    answer: "Karaoke",
  },
  {
    name: "question4",
    query: "What number journal did Dipper initially find?",
    selection: ["3", "2", "1", "0"],
    answer: "3",
  },
  {
    name: "question5",
    query: "What does Mabel specifically tell Dipper not to do that he does anyway?",
    selection: ["Clone himself", "Tell Wendy how he feels", "Raise the dead", "Capture a monster for the shop"],
    answer: "Raise the dead",
  },
  {
    name: "question6",
    query: "Which symbol of the zodiac does Wendy stand on to help defeat Bill",
    selection: ["Question mark", "Ice", "Llama", "Broken heart"],
    answer: "Ice",
  },
  {
    name: "question7",
    query: "Which actor is the voice of the author?",
    selection: ["J.K. Simmons", "Alex Hirsch", "Nick Offerman", "Neil deGrasse Tyson"],
    answer: "J.K. Simmons",
  },
  {
    name: "question8",
    query: "Where does Bill live before coming to Earth?",
    selection: ["The Nightosphere", "The Nightmare Realm", "The Dreamscape", "Dimension c-137"],
    answer: "The Nightmare Realm",
  },
  {
    name: "question9",
    query: "How many Dipper clones were made?(arm Dipper not included)",
    selection: ["8", "9", "10", "11"],
    answer: "10",
  },
  {
    name: "question10",
    query: "What other popular character was voiced by the voice actor of Candy?",
    selection: ["Buttecup", "Anais Watterson", "Mary test", "BMO"],
    answer: "BMO",
  },
]




function countdown() {
  var timeLeft = 120;

  var timeInterval = setInterval(function () {

    if (timeLeft > 1) {
      timer.textContent = timeLeft + ' seconds remaining';

      timeLeft--;
    } else if (timeLeft === 1) {

      timer.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {

      timer.textContent = '';

      clearInterval(timeInterval);


    }
  }, 1000);
}
var userAnswer = ""

function getQuestion(i) {

  questions.textContent = "Question " + (i + 1) + ".  " + questionObject[i]["query"]
  var li1 = document.createElement("li")
  var li2 = document.createElement("li")
  var li3 = document.createElement("li")
  var li4 = document.createElement("li")
  li1.setAttribute("class", "selection1");
  li2.setAttribute("class", "selection2");
  li3.setAttribute("class", "selection3");
  li4.setAttribute("class", "selection4");
  li1.setAttribute("value", "mamamia")
  li1.textContent = questionObject[i]["selection"][0]
  li2.textContent = questionObject[i]["selection"][1]
  li3.textContent = questionObject[i]["selection"][2]
  li4.textContent = questionObject[i]["selection"][3]
  answers.appendChild(li1)
  answers.appendChild(li2)
  answers.appendChild(li3)
  answers.appendChild(li4)
  
  li1.addEventListener("click", selectionClick)
    
  li2.addEventListener("click", selectionClick)  
  
  li3.addEventListener("click", selectionClick) 
    
  li4.addEventListener("click", selectionClick)  
    


  function selectionClick() {
    if (this.value === questionObject[i]["answer"]) {
      console.log("please")
    } else {
      console.log(this.value)
      console.log(questionObject[i]["answer"])
    }
  }
  




  // if (userAnswer === questionObject[i]["answer"]) {
  //   li1.textContent = ""
  //   li2.textContent = ""
  //   li3.textContent = ""
  //   li4.textContent = ""


  // } else  {
  //   li1.textContent = ""
  //   li2.textContent = ""
  //   li3.textContent = ""
  //   li4.textContent = ""
  // }
}


function startGame() {
  countdown()
 

  getQuestion(0)
  if (userAnswer === questionObject[0]["answer"]) {
    console.log("yay")
  } else console.log("fuck")
  // getQuestion(1)
  // getQuestion(2)
  // getQuestion(3)
  // getQuestion(4)
  // getQuestion(5)
  // getQuestion(6)
  // getQuestion(7)
  // getQuestion(8)
  // getQuestion(9)



  // questions.textContent = "Question " + (i + 1) + ".  " + questionObject[i]["query"]
  // var li1 = document.createElement("li")
  // var li2 = document.createElement("li")
  // var li3 = document.createElement("li")
  // var li4 = document.createElement("li")
  // li1.textContent = questionObject[i]["selection"][0]
  // li2.textContent = questionObject[i]["selection"][1]
  // li3.textContent = questionObject[i]["selection"][2]
  // li4.textContent = questionObject[i]["selection"][3]
  // answers.appendChild(li1)
  // answers.appendChild(li2)
  // answers.appendChild(li3)
  // answers.appendChild(li4)

  // li1.addEventListener("click", function () {
  //   userAnswer = questionObject[i - 1]["selection"][0]
  // })
  // li2.addEventListener("click", function () {
  //   userAnswer = questionObject[i - 1]["selection"][1]
  // })
  // li3.addEventListener("click", function () {
  //   userAnswer = questionObject[i - 1]["selection"][2]
  // })
  // li4.addEventListener("click", function () {
  //   userAnswer = questionObject[i - 1]["selection"][3]
  // })
  // if (userAnswer === questionObject[i]["answer"]) {
  //   li1.textContent = ""
  //   li2.textContent = ""
  //   li3.textContent = ""
  //   li4.textContent = ""

  // } 



}
































startButton.addEventListener("click", function (event) {
  startButton.setAttribute("style", "display: none;")
  intro.setAttribute("style", "display: none;")
  startButton.setAttribute("style", "display: none;")
  startGame()
})