import { fetchData } from "./fetchData.js";
const userInfo = document.querySelector(".user-info");
const repoInfo = document.querySelector(".repo-info");
const btnUserSearch = document.querySelector(".user-search");
const errorMsg = document.querySelector(".error");
const apiURL = "https://api.github.com/users/";
const repoURLs = [];

btnUserSearch.addEventListener("click", () => {
  errorMsg.innerHTML = "";
  let userInput = document.getElementById("user-input").value;
  const apiUserURL = apiURL + userInput;
  // Fetch User data
  fetchData(apiUserURL)
    .then((data) => {
      console.log(data);
      showUserInfo(data.avatar_url, data.login, data.html_url);
    })
    .catch((error) => {
      if (error != null) {
        errorMsg.textContent = error;
        errorMsg.style.color = "white";
      }
    });
  const apiReposURL = apiURL + userInput + "/repos";
  // Fetch User data
  fetchData(apiReposURL).then((repo) => {
    showRepoInfo(repo);
  });
});

const showUserInfo = (urlImage, userText, htmlURL) => {
  userInfo.innerHTML = "";
  if (urlImage === undefined || userText === undefined) {
    return;
  }
  const userImage = document.createElement("img");
  const userProfile = document.createElement("a");
  const userNick = document.createElement("h3");
  userImage.src = urlImage;
  userImage.style.width = "55%";
  userImage.style.borderRadius = "60px";
  userProfile.href = htmlURL;
  userProfile.textContent = userText;
  userProfile.target = "_blank";
  userProfile.style.color = "#fff";
  userNick.appendChild(userProfile);
  userInfo.appendChild(userImage);
  userInfo.appendChild(userNick);
};
const showRepoInfo = (repo) => {
  repoInfo.innerHTML = "";
  for (const el of repo) {
    repoURLs.push(el.html_url);
  }
  let countRepos = repo.length;
  const p = document.createElement("p");
  const ul = document.createElement("ul");
  repoURLs.forEach((el, index) => {
    const li = document.createElement("li");
    const repoLinkElement = document.createElement("a");
    ul.appendChild(li);
    li.textContent = index + ": ";
    li.style.color = "#333";
    li.appendChild(repoLinkElement);
    repoLinkElement.style.color = "#432d4a";
    repoLinkElement.href = el;
    repoLinkElement.textContent = el;
    repoLinkElement.target = "_blank";
  });
  p.textContent = "Repositories: " + countRepos;
  repoInfo.style.background = "rgb(199, 199, 199)";
  repoInfo.appendChild(p);
  repoInfo.appendChild(ul);
};
