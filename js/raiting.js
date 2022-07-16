const setRaiting = (raiting, operation) => {
  if (operation === "+") {
    raiting++;
  } else if (operation === "-") {
    raiting--;
  }
  localStorage.setItem("rating", raiting);
};
