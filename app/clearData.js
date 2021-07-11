let clearDataButton = document.getElementById("clearData");

// When the clear keystroke data button is pressed, localStorage.clear() and reload the page so the new data is reflected
clearDataButton.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
