// declare array of questions
const questions = [
  {
    questionText: "In which country would you find the Wadi Rum?",
    choices: ["Syria", "Iraq", "Jordan", "Bahrain"],
    correctAnswer: "Jordan", // answer: "Jordan"
  },

  {
    questionText: "Which building is 632 metres tall?",
    choices: [
      "Empire State Building",
      "Merdeka 118",
      "Burj Khalifa",
      "Shanghai Tower",
    ],
    correctAnswer: "Shanghai Tower", // answer: Shanghai Tower,
  },

  {
    questionText: "Central Park in NYC was modelled on which park in the UK?",
    choices: [
      "Hyde Park",
      "Birkenhead Park",
      "Cannonhill Park",
      "Stanley Park",
    ],
    correctAnswer: "Birkenhead Park", // answer: Birkenhead
  },

  {
    questionText:
      "The World Heritage Site Machu Picchu can be found in which country?",
    choices: ["Ecuador", "Bolivia", "Peru", "Chile"],
    correctAnswer: "Peru", // answer: Peru
  },

  {
    questionText: "How many countries border the Himalayas?",
    choices: ["4", "5", "6", "7"],
    correctAnswer: "6", // answer: "6",
  },

  {
    questionText: "How many degrees does the Pisa tower lean?",
    choices: ["5.5 degrees", "6.5 degrees", "7.5 degrees", "8.5 degrees"],
    correctAnswer: "5.5 degrees", //5.5 degrees
  },

  {
    questionText:
      "Uluru in Australia is made up of sandstone from how long ago?",
    choices: [
      "Around 300 million years",
      "Around 400 million years",
      "Around 500 million years",
      "Around 600 million years",
    ],
    correctAnswer: "Around 600 million years", // answer: Around 6oom years
  },

  {
    questionText: "How many presidents make up Mount Rushmore?",
    choices: ["3", "4", "5", "6"],
    correctAnswer: "4", // answer: 4
  },
];

// GLOBAL DECLARATIONS

//target the quiz main id on index.html document
const mainElement = document.getElementById("main");

//target the quiz section id  on index.html document
const startQuizSection = document.getElementById("start-quiz-section");

//target the start quiz button id on index.html document
const startButton = document.getElementById("start-quiz-button");

let questionIndex = 0;
let timerValue = 10 * questions.length;
let quizComplete = false;
let score = 0;
let timerId;

// initialise local storage
const onLoad = () => {
  // check if high scores exists
  const highScores = readFromLocalStorage();

  if (!highScores) {
    localStorage.setItem("highscores", JSON.stringify([]));
  }
};

// get scores from local storage
const readFromLocalStorage = () => {
  // get from LS & parse object
  const parsedData = JSON.parse(localStorage.getItem("highscores"));
  return parsedData;
};

//event handler for click event for answers
// within renderQuestion function
const handleChoiceClick = (event) => {
  //get current target
  const currentTarget = event.currentTarget;

  //get target
  const target = event.target;

  //check if target element is li
  if (target.tagName === "LI") {
    //get the option the user clicked on
    const value = target.getAttribute("data-value");

    //get the question the user answered
    const correctAnswer = questions[questionIndex].correctAnswer;

    // compare the 2 answers
    if (value !== correctAnswer) {
      // if incorrect subtract 5 seconds from timerValue
      timerValue -= 5;

      if (questionIndex < questions.length - 1) {
        //go to the next question
        questionIndex += 1;

        //remove both present question and last question
        removeQuestion();

        //and render the next question
        renderQuestion();
      } else {
        //go to the last question and render form with scores
        //remove questions
        clearInterval(timerId);
        removeQuestion();
        removeTimerSection();
        renderResultsForm();
      }
    } else {
      score += 1;
      //if it's not the last question
      if (questionIndex < questions.length - 1) {
        //go to the next question
        questionIndex += 1;

        //remove both present question and last question
        removeQuestion();

        //and render the next question
        renderQuestion();
      } else {
        //go to the last question amd render  form with scores
        //remove questions
        clearInterval(timerId);
        removeQuestion();
        removeTimerSection();
        renderResultsForm();
      }
    }
  }
};

//declare function to remove question from page
const removeQuestion = () => {
  document.getElementById("question-container").remove();
};
//declare function to remove timer from page
const removeTimerSection = () => {
  document.getElementById("timer-section-id").remove();
};

//declare function to render questions to page
const renderQuestion = () => {
  //get current question
  const currentQuestion = questions[questionIndex];

  //create section
  const section = document.createElement("section");
  section.setAttribute("class", "section-question-container");
  section.setAttribute("id", "question-container");
  //create div
  const divFirstSection = document.createElement("div");
  divFirstSection.setAttribute("class", "div-section-title");

  //create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "section-title");
  h2.textContent = currentQuestion.questionText;

  //create hr
  const hr = document.createElement("hr");
  hr.setAttribute("class", "section-hr");

  //append child <h2> and <hr> to parent div?  -NOT SURE Check!
  divFirstSection.append(h2, hr);

  //create div
  const divAnswerSection = document.createElement("div");
  divAnswerSection.setAttribute("class", "div-answer-list");

  //create ul and append 4 li
  const ul = document.createElement("ul");
  ul.setAttribute("class", "answer-list");

  //loop over options to create and append li to ul
  const li1 = document.createElement("li");
  li1.setAttribute("class", "list-item");
  li1.setAttribute("data-value", currentQuestion.choices[0]);
  li1.textContent = currentQuestion.choices[0];

  const li2 = document.createElement("li");
  li2.setAttribute("class", "list-item");
  li2.setAttribute("data-value", currentQuestion.choices[1]);
  li2.textContent = currentQuestion.choices[1];

  const li3 = document.createElement("li");
  li3.setAttribute("class", "list-item");
  li3.setAttribute("data-value", currentQuestion.choices[2]);
  li3.textContent = currentQuestion.choices[2];

  const li4 = document.createElement("li");
  li4.setAttribute("class", "list-item");
  li4.setAttribute("data-value", currentQuestion.choices[3]);
  li4.textContent = currentQuestion.choices[3];

  //append li (child) to ul (parent)
  ul.append(li1, li2, li3, li4);

  divAnswerSection.append(ul);

  //append div and ul (children) to section (parent)
  section.append(divFirstSection, divAnswerSection);

  //append section (child) to mainElement (parent)
  mainElement.append(section);

  //add event listener to question section
  section.addEventListener("click", handleChoiceClick);
};

//declare function to remove #start-quiz-section from page
const removeStartSection = () => {
  startQuizSection.remove();
};

//declare event handler for when start button is clicked
const handleStartButtonClick = () => {
  //remove start section
  removeStartSection();

  //render timer
  renderTimerSection();

  //start timer
  startTimer();

  //render questions
  renderQuestion();
};

//add event listener to start quiz button
startButton.addEventListener("click", handleStartButtonClick);

//start timer
const startTimer = () => {
  // declare function to execute every 1 sec
  const updateTimerValue = () => {
    // decrement timer value
    timerValue -= 1;

    // if quizComplete is true: stop timer
    if (quizComplete) {
      clearInterval(timerId);
      document.getElementById("question-container").remove;
    } else {
      // set text to new timer figures
      const updateTimer = document.getElementById("timer-span");
      updateTimer.textContent = timerValue;
    }
    //check if timer reaches 0
    if (timerValue === 0) {
      clearInterval(timerId);
      document.getElementById("question-container").remove;

      //if true render game over
      removeQuestion();
      removeTimerSection();
      renderResultsForm();
    }
  };
  timerId = setInterval(updateTimerValue, 1000);
};

const validateAnswer = (event) => {
  event.stopPropagation();
  // get answer clicked from user
  const currentQuestion = questions[questionIndex];
  const target = event.target;

  // get the correct answer for question
  const currentTarget = (event.currentTarget = currentQuestion.correctAnswer);

  // compare the 2 answers
  if (value !== currentTarget) {
    // if incorrect subtract 5 seconds from timerValue
    timerValue -= 5;

    //TO DO renderQUestionWrongAlert function -> if incorrect render error alert with message and status
  } else if (questionIndex < questions.length - 1) {
    // if question is not last question then increment question index and render next question
    questionIndex += 1;

    renderQuestion();
  }
};

const renderTimerSection = () => {
  // use HTML as guide and build in JS

  const timerSection = document.createElement("section");
  timerSection.setAttribute("class", "timer-section");
  timerSection.setAttribute("id", "timer-section-id");

  const timerDiv = document.createElement("div");
  timerDiv.setAttribute("class", "timer-div");
  timerDiv.innerText = "Time Left in seconds: ";

  const timerSpan = document.createElement("span");
  timerSpan.setAttribute("id", "timer-span");
  timerSpan.textContent = timerValue;

  // append children to parents
  timerSection.appendChild(timerDiv);
  timerDiv.appendChild(timerSpan);
  mainElement.append(timerSection);
};

const renderResultsForm = () => {
  //create section
  const sectionResult = document.createElement("section");
  sectionResult.setAttribute("class", "results-section");
  sectionResult.setAttribute("id", "results-section-id");

  //create div
  const divResultDiv = document.createElement("div");
  divResultDiv.setAttribute("class", "results-div");

  //create h2
  const h2Result = document.createElement("h2");
  h2Result.setAttribute("class", "your-score");
  h2Result.textContent = "Your Score";

  //paragraphs
  const pResult1 = document.createElement("p");
  pResult1.textContent = `Congratulations on completing the quiz! You scored ${timerValue}`;
  const pResult2 = document.createElement("p");
  pResult2.textContent =
    "If you would like to submit your score to the scoreboard please input your name";

  //create hr
  const hrResult = document.createElement("hr");
  hrResult.setAttribute("class", "results-hr");

  //append child <h2> and <hr> and <p> to parent div
  divResultDiv.append(h2Result, hrResult, pResult1, pResult2);

  //create form
  const form = document.createElement("form");
  form.setAttribute("id", "results-form");

  //create div
  const divInputName = document.createElement("div");
  divInputName.setAttribute("id", "div-input-full-name");

  //create input
  const input = document.createElement("input");
  input.setAttribute("id", "fname");
  input.placeholder = "Your name here...";

  ////create div
  const divSubmit = document.createElement("div");
  divSubmit.setAttribute("id", "div-submit-to-high-scores");

  //create submit button
  const submitScoresBtn = document.createElement("button");
  submitScoresBtn.setAttribute("id", "submit-to-high-scores-button");
  submitScoresBtn.setAttribute("class", "high-score-button");
  submitScoresBtn.setAttribute("type", "submit");
  submitScoresBtn.textContent = "Submit your score";

  //append children to parents
  divInputName.append(input);
  divSubmit.append(submitScoresBtn);
  form.append(divInputName, divSubmit);

  sectionResult.append(divResultDiv, form);

  mainElement.append(sectionResult);

  // add submit event handler to form
  submitScoresBtn.addEventListener("click", handleResultsForm);
};

const handleResultsForm = (event) => {
  event.preventDefault();

  //get name from form
  const fullName = document.getElementById("fname").value;

  if (fullName) {
    const yourScore = {
      userName: fullName,
      score: timerValue,
    };

    const highScores = readFromLocalStorage();

    //push score into LS
    highScores.push(yourScore);
    writeToLocalStorage("highscores", highScores);

    // render high scores page
    renderHighScores();
  } else {
    alert("Please input your your name before submitting your score to thee ");
  }
};

const writeToLocalStorage = (key, value) => {
  // stringify object value
  const stringifiedValue = JSON.stringify(value);
  //   set value for each key within LS
  localStorage.setItem(key, stringifiedValue);
};

const renderHighScores = () => {
  window.location = "highscores.html";
};

//event listener for document on load
window.addEventListener("load", onLoad);
