import { fetchData } from "./fetchData.js";

const btnUserIssues = document.querySelector(".user-issues");
const apiURL = "https://api.github.com/repos/";
let issueRating = localStorage.getItem("rating");

btnUserIssues.addEventListener("click", () => {
  let userInput = document.getElementById("user-input").value;
  const apiIssuesURL = apiURL + userInput + "/issues";
  fetchData(apiIssuesURL)
    .then((data) => {
      console.log(data);
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
      <p><strong>User Repository: </strong><a href='${data[i].html_url}' target='_blank'>${data[i].html_url}</a></p>
      <p><strong>State:</strong>${data[i].state}</p>
      <div class='raiting'>
        <div class='plus' onClick='setRaiting(${issueRating}, '+')'>+</div>
        <div class='minus' onClick='setRaiting(${issueRating}, '-')'>-</div>
      </div>
      <br/>
    `;
    if (i === "10") {
      return;
    }
    ul.appendChild(li);
  }
  issues.innerHTML = ul;
};
