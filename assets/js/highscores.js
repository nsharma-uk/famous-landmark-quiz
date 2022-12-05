//target main id on highscores.html
const mainHigh = document.getElementById("main-high");
const highScoresTable = document.getElementById("high-scores-table");

// get scores from local storage
const readFromLocalStorage = () => {
  // get from LS & parse object

  const parsedData = JSON.parse(localStorage.getItem("highscores"));
  const topFive = parsedData?.slice(0, 5);
  return topFive;
};

//function to trigger what happens on load of the page
const onLoad = () => {
  //get saved scores from local storage
  const highScores = readFromLocalStorage() || [];

  //render message & take quiz button if no high scores in local storage
  if (!highScores || highScores.length === 0) {
    highScoresTable.remove();

    const message = document.createElement("h2");
    message.setAttribute("class", "high-scores-message");
    message.setAttribute("id", "high-scores-message");
    message.textContent = "Currently no scores to display";

    const message1 = document.createElement("h2");
    message1.setAttribute("class", "high-scores-message1");
    message1.setAttribute("id", "high-scores-message1");
    message1.textContent = "Please take the quiz to see a score board here";

    const hr1 = document.createElement("hr");
    hr1.setAttribute("class", "message-hr");

    const takeQuizButton = document.createElement("button");
    takeQuizButton.setAttribute("id", "take-quiz-button");
    takeQuizButton.textContent = "Take Quiz";
    mainHigh.append(message, hr1, message1, takeQuizButton);
    // mainHigh.append(message, message1);
    takeQuizButton.addEventListener("click", handleTakeQuizClick);
  } else {
    //render score table...
    highScoresTable;
  }

  //...with these sections
  //create section
  const section = document.createElement("section");
  section.setAttribute("class", "high-score-section");
  section.setAttribute("id", "high-score-section");

  //create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "high-score-h2");
  h2.textContent = "Top 5 Scores";

  //create hr
  const hr = document.createElement("hr");
  hr.setAttribute("class", "high-score-hr");

  //create div
  const divTableSection = document.createElement("div");
  divTableSection.setAttribute("class", "scoreboard");

  //create table
  const table = document.createElement("table");
  table.setAttribute("class", "table");

  //table column names
  const columnName = document.createElement("th");
  columnName.setAttribute("class", "column");
  columnName.setAttribute("id", "column-name");
  columnName.textContent = "Name";

  const columnScore = document.createElement("th");
  columnName.setAttribute("class", "column");
  columnScore.setAttribute("id", "column-score");
  columnScore.textContent = "Score";

  //table rows for scores to go into
  highScores.forEach((highScore) => {
    const tableRow = document.createElement("tr");
    tableRow.setAttribute("class", "table-row");

    const tableName = document.createElement("td");
    tableName.setAttribute("class", "table-info");
    tableName.textContent = highScore.userName;

    const tableScore = document.createElement("td");
    tableScore.setAttribute("class", "table-info");
    tableScore.textContent = highScore.score;

    //append children to parents
    tableRow.append(tableName, tableScore);
    table.append(columnName, columnScore);
    divTableSection.append(tableRow);
    section.append(h2, hr, table, divTableSection);
  });

  //create div
  const divButtonSection = document.createElement("div");
  divButtonSection.setAttribute("class", "button-section-div");

  //create 2 buttons
  const retryButton = document.createElement("button");
  retryButton.setAttribute("id", "retry-button");
  retryButton.textContent = "Try quiz again";

  const clearScoresButton = document.createElement("button");
  clearScoresButton.setAttribute("id", "clear-scores-button");
  clearScoresButton.textContent = "Clear High Scores";
  divButtonSection.append(retryButton, clearScoresButton);
  section.append(divTableSection, divButtonSection);
  highScoresTable.append(section);

  // add submit event handler to form
  clearScoresButton.addEventListener("click", handleClearScoresClick);
  retryButton.addEventListener("click", handleRetryClick);
};

//event listeners for buttons
const handleClearScoresClick = () => {
  localStorage.clear();
  onLoad();
};

const handleRetryClick = () => {
  window.location = "index.html";
};

const handleTakeQuizClick = () => {
  window.location = "index.html";
};

//set page load
window.addEventListener("load", onLoad);
