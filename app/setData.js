var totalKeys = document.getElementById("totalKeys");
var totalClicks = document.getElementById("totalClicks");
var mostUsedKey = document.getElementById("mostUsedKey");
var mostClicks = document.getElementById("mostClicks");

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
    Total Keys Pressed Today: ${totalKeysNum.toLocaleString()}
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
    Total Mouse Clicks Today: ${totalClicksNum.toLocaleString()}
  `;
}

// This loops over the localKeys and returns the key that has the largest timesClicked
function setMostUsedKey() {
  let keysArr = JSON.parse(localStorage.getItem("localKeys"));

  // This removes the leftClick and rightClick keys from keysArr
  keysArr = removeByAttr(keysArr, "keyCode", 134761167);
  keysArr = removeByAttr(keysArr, "keyCode", 4164761167);

  // This sorts keysArr in descending order of timeClicked and sets it to sortedArr
  let sortedArr = keysArr.sort((a, b) => b.timesClicked - a.timesClicked);

  // This gets the first item from sortedArr i.e. key with most presses and sets the keyName to mostUsedKey
  let mostUsedKeyName = sortedArr[0].keyName;
  // This gets the first item from sortedArr i.e. key with most presses and sets the timesClicked to mostUsedKeyPresses
  let mostUsedKeyPresses = sortedArr[0].timesClicked;

  mostUsedKey.innerHTML = `
    Your most used key today was: ${mostUsedKeyName}
  `;
  mostClicks.innerHTML = `
    You pressed it ${mostUsedKeyPresses.toLocaleString()} times
  `;
}

// This is run on page startup or refresh
function onStartup() {
  setTotalKeysClicked();
  setTotalMouseClicks();
  setMostUsedKey();
  setHeatmap();
}

var removeByAttr = function (arr, attr, value) {
  var i = arr.length;
  while (i--) {
    if (
      arr[i] &&
      arr[i].hasOwnProperty(attr) &&
      arguments.length > 2 &&
      arr[i][attr] === value
    ) {
      arr.splice(i, 1);
    }
  }
  return arr;
};
