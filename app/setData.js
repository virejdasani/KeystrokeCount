var totalKeys = document.getElementById("totalKeys");
var totalClicks = document.getElementById("totalClicks");

// This counts the number of keys pressed by looping over the timesClicked in the keys array
function setTotalKeysClicked() {
  let totalKeysNum = 0;
  // Get the keys array from localStorage
  let keysArr = JSON.parse(localStorage.getItem("localKeys"));

  // Loop over all the objects in the keysArr
  for (let i in keysArr) {
    // This is a check to make sure that mouse clicks are not counted as clicks because the key code for rightClick and leftClick is over 100000000
    if (keysArr[i].keyCode < 100000000) {
      // Add the timesClicked of all the keys to totalKeysNum
      totalKeysNum += keysArr[i].timesClicked;
    }
  }

  // Now show the totalKeysNum in the totalKeys h2 element
  totalKeys.innerHTML = `
    Total Keys Pressed Today: ${totalKeysNum}
  `;
}

// This counts the number of keys pressed by looping over the timesClicked in the keys array
function setTotalMouseClicks() {
  let totalClicksNum = 0;
  // Get the keys array from localStorage
  let keysArr = JSON.parse(localStorage.getItem("localKeys"));

  // Loop over all the objects in the keysArr
  for (let i in keysArr) {
    // The only keyCodes greater than 100000000 are for leftClick and rightClick
    if (keysArr[i].keyCode > 100000000) {
      // Add the timesClicked of all the keys to totalKeysNum
      totalClicksNum += keysArr[i].timesClicked;
    }
  }

  // Now show the totalClickedNum in the totalKeys h2 element
  totalClicks.innerHTML = `
    Total Mouse Clicks Today: ${totalClicksNum}
  `;
}

// This is run on page startup or refresh
function onStartup() {
  setTotalKeysClicked();
  setTotalMouseClicks();
}
