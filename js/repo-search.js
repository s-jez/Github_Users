import { fetchData } from "./fetchData.js";
const btnUserRepos = document.querySelector(".repo-search");
const apiURL = "https://api.github.com/users/";
const repoURLs = [];

btnUserRepos.addEventListener("click", () => {
  let userInput = document.getElementById("repo-input").value;
  const apiReposURL = apiURL + userInput + "/repos";
  // Fetch User data
  fetchData(apiReposURL).then((repo) => {
    showRepoInfo(repo);
    console.log(repo);
  });
});
const showRepoInfo = (repo) => {
  for (const el of repo) {
    repoURLs.push(el.html_url);
  }
  console.log(repoURLs);
  const userRepos = document.querySelector(".user-repos");
  repoURLs.forEach((el) => {
    const elem = document.createElement("li");
    const aEl = document.createElement("a");
    aEl.href = el;
    aEl.textContent = el;
    aEl.target = "_blank";
    userRepos.appendChild(elem);
    elem.appendChild(aEl);
  });
};
