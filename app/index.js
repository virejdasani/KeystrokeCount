const { ipcRenderer } = require("electron");

// Get the localKeys from localStorage
// localKeys is the keys array from keys.js
var localKeys = localStorage.getItem("localKeys");

// If localKeys is not found in localStorage
if (localKeys === null) {
  // Set the keys array to localStorage by id of "localKeys"
  localStorage.setItem("localKeys", JSON.stringify(keys));
  console.log("Set keys array to localStorage");
}

// When a key press is detected in the main process this happens
ipcRenderer.on("keydownEvent", (event, keyCodesPressed) => {
  // Set localKeys to "localKeys" from localStorage
  localKeys = JSON.parse(localStorage.getItem("localKeys"));
  // If localKeys doesn't exist in localStorage, we initialize it to the keys array from keys.js

  // Loop over all the objects in the keys array (from keys.js)
  for (let i in localKeys) {
    // If the keyCode in the keys array matches the last pressed key
    if (localKeys[i].keyCode == keyCodesPressed[0]) {
      // For that key, the timesClicked in that object is incremented by 1
      localKeys[i].timesClicked += 1;
      // Now update the localKeys array in localStorage to reflect the +1 in timesClicked
      localStorage.setItem("localKeys", JSON.stringify(localKeys));
      // This shows the total number of keys pressed today (from setData.js)
      setTotalKeysClicked();
      setMostUsedKey();
      // Break out of the loop
      break;
    }
  }
});

// For mouse clicks
// When left click is detected
ipcRenderer.on("leftClickEvent", (event, leftClicks) => {
  // Get the keys array from localStorage
  localKeys = JSON.parse(localStorage.getItem("localKeys"));

  // Loop over all the objects in the keys array (from keys.js)
  for (let i in localKeys) {
    // Check if the 'i'th keyCode is 134761167, which is the keyCode for leftClick (this code is randomly set by me in the keys array)
    if (localKeys[i].keyCode == 134761167) {
      // Increment the timesClicked for leftClick
      localKeys[i].timesClicked += 1;
      // Update the keys array in localStorage
      localStorage.setItem("localKeys", JSON.stringify(localKeys));
      // This shows the total number of mouse clicks today (from setData.js)
      setTotalMouseClicks();
      // Break out of the loop
      break;
    }
  }
});

// When right click is detected
ipcRenderer.on("rightClickEvent", (event, rightClicks) => {
  // Get the keys array from localStorage
  localKeys = JSON.parse(localStorage.getItem("localKeys"));

  // Loop over all the objects in the keys array (from keys.js)
  for (let i in localKeys) {
    // Check if the 'i'th keyCode is 4164761167, which is the keyCode for rightClick (this code is randomly set by me in the keys array)
    if (localKeys[i].keyCode == 4164761167) {
      // Increment the timesClicked for rightClick
      localKeys[i].timesClicked += 1;
      // Update the keys array in localStorage
      localStorage.setItem("localKeys", JSON.stringify(localKeys));
      // This shows the total number of mouse clicks today (from setData.js)
      setTotalMouseClicks();
      // Break out of the loop
      break;
    }
  }
});
