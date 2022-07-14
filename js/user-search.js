import { fetchData } from "./fetchData.js";
const userInfo = document.querySelector(".user-info");
const btnUserSearch = document.querySelector(".user-search");
const apiURL = "https://api.github.com/users/";
const repoURLs = [];

btnUserSearch.addEventListener("click", () => {
  let userInput = document.getElementById("user-input").value;
  const apiUserURL = apiURL + userInput;
  // Fetch User data
  fetchData(apiUserURL).then((data) => {
    showUserInfo(data.avatar_url, data.login);
  });
  const apiReposURL = apiURL + userInput + "/repos";
  // Fetch User data
  fetchData(apiReposURL).then((repo) => {
    showRepoInfo(repo);
    console.log(repo);
  });
});

const showUserInfo = (urlImage, userText) => {
  userInfo.innerHTML = "";
  if (urlImage === undefined || userText === undefined) {
    return;
  }
  const userImage = document.createElement("img");
  const userNick = document.createElement("h3");
  userImage.src = urlImage;
  userImage.style.width = "55%";
  userNick.textContent = userText;
  userInfo.appendChild(userImage);
  userInfo.appendChild(userNick);
};
const showRepoInfo = (repo) => {
  for (const el of repo) {
    repoURLs.push(el.html_url);
  }
  console.log(repoURLs);
  repoURLs.forEach((el) => {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const repoLinkElement = document.createElement("a");
    ul.appendChild(li);
    li.appendChild(repoLinkElement);
    repoLinkElement.href = el;
    repoLinkElement.textContent = el;
    repoLinkElement.target = "_blank";
    userInfo.appendChild(ul);
  });
};
