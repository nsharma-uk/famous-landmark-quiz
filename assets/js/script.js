// GLOBAL DECLARATIONS

//link to HTML document by ID

//target the quiz section on document
const startQuizSection=document.getElementById("start-quiz-section");

//target the start quiz button
const startBtn = document.getElementById("start-quiz-button");

//target the timer span
const timerSpan = document.getElementById("timer-span");

//questions
const questions = [{
    question: "In which country would you find the Wadi Rum?",
    a: "Syria",
    b: "Iraq",
    c: "Jordan",
    d: "Bahrain",
   // answer: "b",
},

{
    question: "Which building is 632 metres tall",
    a: "Empire State Building",
    b: "Merdeka 118",
    c: "Burj Khalifa",
    d: "Shanghai Tower",
   // answer: "d",
},

{
    question: "Central Park in NYC was modelled on which park in the UK?",
a: "Hyde Park",
b: "Birkenhead Park",
c: "Cannonhill Park",
d: "Stanley Park",
// answer: "b",
},

{
    question: "The World Heritage Site Machu Picchu can be found in which country?",
a: "Ecuador",
b: "Bolivia",
c: "Peru",
d: "Chile",
// answer: "c",
},

{
    question: "How many countries border the Himalayas?",
a: "4",
b: "5",
c: "6",
d: "7",
// answer: "c",
},

{
    question: "How many degrees does the Pisa tower lean?"
a: "5.5 degrees",
b: "6.5 degrees",
c: "7.5 degrees",
d: "8.5 degrees",
// answer: "a",
},

{
    question: "Uluru in Australia is made up of sandstone from how long ago?"
a: "Around 300 million years",
b: "Around 400 million years",
c: "Around 500 million years",
d: "Around 600 million years",
// answer: "d",
},

{
    question: "How many presidents make up Mount Rushmore?"
a: "3",
b: "4",
c: "5",
d: "6",
// answer: "b",
},
];

let questionIndex = 0;
let timerValue = 10 * questions.length;
let quizComplete = false;

const onLoad = () => {
  // initialise local storage
  // check if highscores exists in LS
  // if false then set highscores to empty array in LS
};

const removeStartSection = () => {};

const startTimer = () => {
  // declare function to execute every 1 sec
  const countdown = () => {
      
    // decrement timer value
    timer -= 1;

    // if quizComplete is true then stop timer
    // check if timer reaches 0
    if (timer === 0) {
        clearInterval(timerId);

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