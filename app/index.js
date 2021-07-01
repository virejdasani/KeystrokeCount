const { ipcRenderer } = require("electron");

const leftClick = document.getElementById("leftClick");
const rightClick = document.getElementById("rightClick");
const keydown = document.getElementById("keydown");

// TODO - when message is received from main process, set message to local storage

// When a key press is detected in the main process this happens
ipcRenderer.on("keydownEvent", (event, keyCodesPressed) => {
  // We find which key is pressed by comparing the keyCode we get from the main process to the keyNames in keys.js
  // keyCodesPressed is an array of keyCodes of all the keys pressed. keyCodesPressed[0] gives us the last key pressed
  // keys is the array in keys.js
  var key = keys.find((key) => key.keyCode === keyCodesPressed[0]);

  // This counts how many times keys are pressed
  for (var i in keys) {
    // If the keyCode in the keys array matches the last pressed key
    if (keys[i].keyCode == keyCodesPressed[0]) {
      // For that key, the timesClicked is incremented by 1
      keys[i].timesClicked += 1;
      console.log(keys[i]);
      keydown.innerHTML = keys[i].keyName + " " + keys[i].timesClicked;
      break;
    }
  }
});

// For mouse clicks
// When left click is detected
ipcRenderer.on("leftClickEvent", (event, message) => {
  leftClick.innerHTML = "Number of left clicks: " + message;
});

// When right click is detected
ipcRenderer.on("rightClickEvent", (event, message) => {
  rightClick.innerHTML = "Number of right clicks: " + message;
});
