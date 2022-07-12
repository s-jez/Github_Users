import { fetchData } from "./fetchData.js";
const userInfo = document.querySelector(".user-info");
const btnUserSearch = document.querySelector(".user-search");
const apiURL = "https://api.github.com/users/";

btnUserSearch.addEventListener("click", () => {
  let userInput = document.getElementById("user-input").value;
  const apiUserURL = apiURL + userInput;
  // Fetch User data
  fetchData(apiUserURL).then((data) => {
    showUserInfo(data.avatar_url, data.login);
  });
});

const showUserInfo = (urlImage, userText) => {
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
