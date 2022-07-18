import { fetchData } from "./fetchData.js";

const btnUserIssues = document.querySelector(".user-issues");
const apiURL = "https://api.github.com/repos/";
const errorMsg = document.querySelector(".error");

let issueRating = 0;

const issueRaitingIncrement = () => {
  if (issueRating < -99 || issueRating > 99) {
    console.log(issueRating + "!!");
    return;
  }
  renderElements();
  issueRating++;
  console.log(issueRating);
  localStorage.setItem("issueRaiting", issueRating);
};
const issueRaitingDecrement = () => {
  if (issueRating < -99 || issueRating > 99) {
    console.log(issueRating + "!!");
    return;
  }
  renderElements();
  issueRating--;
  console.log(issueRating);
  localStorage.setItem("issueRaiting", issueRating);
};
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
    <br/>
    `;
    if (i === "10") {
      return;
    }
    let raitingDiv = document.createElement("div");
    let btnPlus = document.createElement("button");
    let btnMinus = document.createElement("button");
    raitingDiv.classList.add("raiting");
    btnPlus.classList.add("plus");
    btnMinus.classList.add("minus");
    btnPlus.onclick = issueRaitingIncrement;
    btnMinus.onclick = issueRaitingDecrement;
    btnPlus.textContent = "+";
    btnMinus.textContent = "-";
    raitingDiv.appendChild(btnPlus);
    raitingDiv.appendChild(btnMinus);
    li.appendChild(raitingDiv);
    ul.appendChild(li);
  }
};
btnUserIssues.addEventListener("click", () => {
  let userInput = document.getElementById("user-input").value;
  const apiIssuesURL = apiURL + userInput + "/issues";
  fetchData(apiIssuesURL)
    .then((data) => {
      console.log(data);
      renderElements(data);
    })
    .catch((error) => {
      if (error != null) {
        errorMsg.textContent = error;
        errorMsg.style.color = "white";
      }
    });
});
