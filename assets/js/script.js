// delcare list of questions
const questions = [
  {
    question: "In which country would you find the Wadi Rum?",
    choices: ["Syria", "Iraq", "Jordan", "Bahrain"],
    answer: [2], // answer: "Jordan"
  },

  {
    question: "Which building is 632 metres tall?",
    choices: [
      "Empire State Building",
      "Merdeka 118",
      "Burj Khalifa",
      "Shanghai Tower",
    ],
    answer: [3], // answer: Shanghai Tower,
  },

  {
    question: "Central Park in NYC was modelled on which park in the UK?",
    choices: [
      "Hyde Park",
      "Birkenhead Park",
      "Cannonhill Park",
      "Stanley Park",
    ],
    answer: [1], // answer: Birkenhead
  },

  {
    question:
      "The World Heritage Site Machu Picchu can be found in which country?",
    choices: ["Ecuador", "Bolivia", "Peru", "Chile"],
    answer: [2], // answer: Peru
  },

  {
    question: "How many countries border the Himalayas?",
    choices: ["4", "5", "6", "7"],
    answer: [2], // answer: "c",
  },

  {
    question: "How many degrees does the Pisa tower lean?",
    choices: ["5.5 degrees", "6.5 degrees", "7.5 degrees", "8.5 degrees"],
    answer: [0], //5.5 degrees
  },

  {
    question: "Uluru in Australia is made up of sandstone from how long ago?",
    choices: [
      "Around 300 million years",
      "Around 400 million years",
      "Around 500 million years",
      "Around 600 million years",
    ],
    answer: [3], // answer: Around 6oom years
  },

  {
    question: "How many presidents make up Mount Rushmore?",
    choices: ["3", "4", "5", "6"],
    answer: [1], // answer: 4
  },
];

console.log(questions);
// GLOBAL DECLARATIONS

//target the quiz main id on index.html document
const main = document.getElementById("main");

//target the quiz section id  on index.html document
const startQuizSection = document.getElementById("start-quiz-section");

//target the start quiz button id on index.html document
const startButton = document.getElementById("start-quiz-button");

//target the timer span index.html document
const timerSpan = document.getElementById("timer-span");

let questionIndex = 0;
let timer = 100;
let timerValue = 10 * questions.length;
let quizComplete = false;
let score = 0;

//store scores in LS
const storedScores = (onLoad = () => {
  // initialize local storage

  const highScoresOnLS = localStorage.getItem("storedScores");

  // check if high scores exists in LS

  // if false then set high scores to empty array in LS
});

//declare function to render questions to page
const renderQuestion = () => {
  console.log("render question");
};

//declare function to remove #start-quiz-section from page
const removeStartSection = () => {
  console.log("remove start section");
};
//declare event handler for when start button is clicked
const handleStartButtonClick = () => {
  console.log("start button clicked");

  //remove start section
  removeStartSection();
  //render questions
  renderQuestion();
};

//add event listener to start quiz button
startButton.addEventListener("click", handleStartButtonClick);

//start timer
const startTimer = () => {
  // declare function to execute every 1 sec
  timer -= 1;

  const countdown = () => {
    // decrement timer value
    // if quizComplete is true then stop timer
    // check if timer reaches 0
    // if true render game over
  };

  // setInterval of 1000ms (1s)
};

const validateAnswer = () => {
  // get answer clicked from user
  // get the correct answer for question
  // compare the 2 answers
  // if incorrect subtract 5 seconds from timerValue
  // if incorrect render error alert with message and status
  // if correct render success alert with message and status
  // set timeout for 500ms and then go to next question
  // if question is last question set quizComplete to true and then render form
  // if question is not last question then increment question index and render next question
};

const handleFormSubmit = () => {
  // get value from input
  // check if empty then render error alert with message and status
  // if not empty then create the score object
  // {
  //   fullName: "Bob Smith",
  //   score: 25
  // }
  // push score object to LS
  // render quizCompleteSection
};

const renderTimerSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const renderQuestionSection = () => {
  // use HTML as guide and build in JS
  // append section to main
  // add click event listener on #question-section
};

const renderGameOver = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const renderAlert = (message, status) => {
  // use HTML as guide and build in JS
  // append div to #question-section
};

const renderForm = () => {
  // use HTML as guide and build in JS
  // append section to main
  // add submit event handler to form
};

const renderQuizCompleteSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const startQuiz = () => {
  // remove start section
  // start timer
  // render timer section
  // render question section
};

// add event listeners
// add document on load event listener
// add start button click event listener
