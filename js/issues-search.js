import { fetchData } from "./fetchData.js";

const btnUserIssues = document.querySelector(".user-issues");
const apiURL = "https://api.github.com/repos/";

btnUserIssues.addEventListener("click", () => {
  let userInput = document.getElementById("repo-input").value;
  const apiIssuesURL = apiURL + userInput + "/issues";
  console.log(apiIssuesURL);
  fetchData(apiIssuesURL)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
});
