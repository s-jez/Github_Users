import { fetchData } from "./fetchData.js";
const btnUserSearch = document.querySelector(".user-search");
const userInfo = document.querySelector(".user-info");

btnUserSearch.addEventListener("click", () => {
  let userInput = document.getElementById("user-input").value;
  let apiURL = `https://api.github.com/users/${userInput}`;
  fetchData(apiURL).then((data) => {
    createUserElements(data.avatar_url, data.login);
  });
});
const createUserElements = (urlImage, userText) => {
  userInfo.innerHTML = "";
  if (urlImage === undefined || userText === undefined) {
    return;
  }
  const userImage = document.createElement("img");
  const userNick = document.createElement("p");
  userImage.src = urlImage;
  userNick.textContent = userText;
  userInfo.appendChild(userImage);
  userInfo.appendChild(userNick);
};
