const heatmapColors = [
  "#fa6e6e",
  "#fc7290",
  "#f57cb0",
  "#e78acc",
  "#d399e2",
  "#bca7f0",
  "#a5b3f7",
  "#94bef8",
  "#8ac7f3",
  "#8bceec",
];

// This calculates and sets colors to the keyboard keys based on how many times they have been clicked
function setHeatmap() {
  // Get the array from localStorage
  let keysArr = JSON.parse(localStorage.getItem("localKeys"));

  // This removes the leftClick and rightClick keys from keysArr
  keysArr = removeByAttr(keysArr, "keyCode", 134761167);
  keysArr = removeByAttr(keysArr, "keyCode", 4164761167);

  // This sorts keysArr in descending order of timeClicked and sets it to sortedArr
  let sortedArr = keysArr.sort((a, b) => b.timesClicked - a.timesClicked);

  // This gets the first item from sortedArr i.e. key with most presses
  let topKey = sortedArr[0].timesClicked;

  // Loop over all keys from keysArr
  for (let i in keysArr) {
    // This is the current or 'i'th object in the array
    let thisKey = keysArr[i];

    // Check if thisKey exits on the keyboard
    if (document.getElementById(thisKey.keyName)) {
      // This is to give colors to keys based on how many relative clicks to the topKey they have
      // The topKey is always the most intense color
      if (thisKey.timesClicked > 0.9 * topKey) {
        document.getElementById(thisKey.keyName).style.backgroundColor =
          heatmapColors[0];
        document.getElementById(thisKey.keyName).style.textShadow =
          "0px 1px 0px #4b4848";
        document.getElementById(thisKey.keyName).style.color = "#fff";
      } else if (thisKey.timesClicked > 0.8 * topKey) {
        document.getElementById(thisKey.keyName).style.backgroundColor =
          heatmapColors[1];
        document.getElementById(thisKey.keyName).style.textShadow =
          "0px 1px 0px #4b4848";
        document.getElementById(thisKey.keyName).style.color = "#fff";
      } else if (thisKey.timesClicked > 0.7 * topKey) {
        document.getElementById(thisKey.keyName).style.backgroundColor =
          heatmapColors[2];
        document.getElementById(thisKey.keyName).style.textShadow =
          "0px 1px 0px #4b4848";
        document.getElementById(thisKey.keyName).style.color = "#fff";
      } else if (thisKey.timesClicked > 0.6 * topKey) {
        document.getElementById(thisKey.keyName).style.backgroundColor =
          heatmapColors[3];
        document.getElementById(thisKey.keyName).style.textShadow =
          "0px 1px 0px #4b4848";
        document.getElementById(thisKey.keyName).style.color = "#fff";
      } else if (thisKey.timesClicked > 0.5 * topKey) {
        document.getElementById(thisKey.keyName).style.backgroundColor =
          heatmapColors[4];
        document.getElementById(thisKey.keyName).style.textShadow =
          "0px 1px 0px #4b4848";
        document.getElementById(thisKey.keyName).style.color = "#fff";
      } else if (thisKey.timesClicked > 0.4 * topKey) {
        document.getElementById(thisKey.keyName).style.backgroundColor =
          heatmapColors[5];
        document.getElementById(thisKey.keyName).style.textShadow =
          "0px 1px 0px #4b4848";
        document.getElementById(thisKey.keyName).style.color = "#fff";
      } else if (thisKey.timesClicked > 0.3 * topKey) {
        document.getElementById(thisKey.keyName).style.backgroundColor =
          heatmapColors[6];
        document.getElementById(thisKey.keyName).style.textShadow =
          "0px 1px 0px #4b4848";
        document.getElementById(thisKey.keyName).style.color = "#fff";
      } else if (thisKey.timesClicked > 0.2 * topKey) {
        document.getElementById(thisKey.keyName).style.backgroundColor =
          heatmapColors[7];
        document.getElementById(thisKey.keyName).style.textShadow =
          "0px 1px 0px #4b4848";
        document.getElementById(thisKey.keyName).style.color = "#fff";
      } else if (thisKey.timesClicked > 0.1 * topKey) {
        document.getElementById(thisKey.keyName).style.backgroundColor =
          heatmapColors[8];
        document.getElementById(thisKey.keyName).style.textShadow =
          "0px 1px 0px #4b4848";
        document.getElementById(thisKey.keyName).style.color = "#fff";
      } else if (thisKey.timesClicked > 0) {
        document.getElementById(thisKey.keyName).style.backgroundColor =
          heatmapColors[9];
        document.getElementById(thisKey.keyName).style.textShadow =
          "0px 1px 0px #4b4848";
        document.getElementById(thisKey.keyName).style.color = "#fff";
      } else if (thisKey.timesClicked == 0) {
        // console.log("thisKey never clicked")
      } else {
        // console.log("KEYERR");
      }
    } else {
      // console.log("This key not found:");
      // console.log(thisKey.keyName);
    }
  }
}

// For heatmapColors
// https://colordesigner.io/gradient-generator
