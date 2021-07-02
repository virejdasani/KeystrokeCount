const { ipcRenderer } = require("electron");

const leftClick = document.getElementById("leftClick");
const rightClick = document.getElementById("rightClick");
const keydown = document.getElementById("keydown");

// Get the localKeys from localStorage
var localKeys = localStorage.getItem("localKeys");

// If localKeys doesn't exist in localStorage, we initialize it to the keys array from keys.js
if (localKeys === null) {
  localStorage.setItem("localKeys", JSON.stringify(keys));
  console.log("SET ARR");
}

// When a key press is detected in the main process this happens
ipcRenderer.on("keydownEvent", (event, keyCodesPressed) => {
  // Set localKeys to "localKeys" from localStorage
  localKeys = JSON.parse(localStorage.getItem("localKeys"));

  // We loop over all the objects in the keys array (from keys.js)
  for (var i in localKeys) {
    // If the keyCode in the keys array matches the last pressed key
    if (localKeys[i].keyCode == keyCodesPressed[0]) {
      // For that key, the timesClicked in that object is incremented by 1
      localKeys[i].timesClicked += 1;
      // Now update the localKeys array in localStorage to reflect the +1 in timesClicked
      localStorage.setItem("localKeys", JSON.stringify(localKeys));
      // This gets the localKeys array from localStorage and logs
      console.log(JSON.parse(localStorage.getItem("localKeys")));
      // Break out of the loop
      break;
    }
  }
});

// For mouse clicks
// When left click is detected
ipcRenderer.on("leftClickEvent", (event, leftClicks) => {
  leftClick.innerHTML = "Number of left clicks: " + leftClicks;
});

// When right click is detected
ipcRenderer.on("rightClickEvent", (event, rightClicks) => {
  rightClick.innerHTML = "Number of right clicks: " + rightClicks;
});
