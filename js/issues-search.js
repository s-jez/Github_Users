import { fetchData } from "./fetchData.js";

const btnUserIssues = document.querySelector(".user-issues");
const apiURL = "https://api.github.com/repos/";

btnUserIssues.addEventListener("click", () => {
  let userInput = document.getElementById("user-input").value;
  const apiIssuesURL = apiURL + userInput + "/issues";
  console.log(apiIssuesURL);
  fetchData(apiIssuesURL)
    .then((data) => {
      renderElements(data);
    })
    .catch((error) => console.log(error));
});
const renderElements = (data) => {
  for (let i in data) {
    let ul = document.querySelector(".issues");
    let li = document.createElement("li");
    li.classList = "issue";
    li.innerHTML = `
      <p><strong>Issue Title: </strong>${data[i].title}</p>
      <p><strong>User Login: </strong>${data[i].user.login}</p>
      <p><strong>User Repository: </strong><a href='${data[i].html_url}'>${data[i].html_url}</a></p>
      <br/>
    `;
    if (i === "5") {
      return;
    }
    ul.appendChild(li);
  }
  issues.innerHTML = ul;
};
