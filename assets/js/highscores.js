//function to trigger what happens on load of the page
const onLoad = () => {
          renderHighScoresTable();
    }
   //set page load
  window.addEventListener("load", onLoad);



renderHighScoresTable = () => {
  const main = document.createElement("main");
  main.setAttribute("class", "main");

  //create section
  const section = document.createElement("section");
  section.setAttribute("class", "high-score-section");
  section.setAttribute("id", "high-score-section");

  //create h2
  const h2 = document.createElement("h2");
  h2.setAttribute("class", "high-score-h2");
  h2.textContent = "High Scores Board";

  //create hr
  const hr = document.createElement("hr");
  hr.setAttribute("class", "high-score-hr");

  //create div
  const divTableSection = document.createElement("div");
  divTableSection.setAttribute("class", "scoreboard");
  //table rows for scores to go into
  const table = document.createElement("table");
  table.setAttribute("class", "table");

  //table rows for scores to go into
  const TableRow = document.createElement("tr");
  TableRow.setAttribute("class", "table-row");

  //create div
  const divButtonSection = document.createElement("div");
  divTableSection.setAttribute("class", "button-section-div");
  divTableSection.textContent = "You can now see if you are on the leader board";

  //create 2 buttons
  const retryButton = document.createElement("button");
  retryButton.setAttribute("id", "retry-button");
  retryButton.textContent = "Try quiz again";

  const clearScoresButton = document.createElement("button");
  clearScoresButton.setAttribute("id", "clear-scores-button");
  clearScoresButton.textContent = "Clear High Scores";

  //append children to parents
  table.append(TableRow);
  divTableSection.append(table);
  section.append(h2, hr, divTableSection);
  divButtonSection.append(retryButton, clearScoresButton);
  section.append(divTableSection, divButtonSection);
  main.append(section);
 };


