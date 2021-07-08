function setHeatmap() {
  setColor();
}

function setColor() {
  let keysArr = JSON.parse(localStorage.getItem("localKeys"));

  // This removes the leftClick and rightClick keys from keysArr
  keysArr = removeByAttr(keysArr, "keyCode", 134761167);
  keysArr = removeByAttr(keysArr, "keyCode", 4164761167);

  // This sorts keysArr in descending order of timeClicked and sets it to sortedArr
  let sortedArr = keysArr.sort((a, b) => b.timesClicked - a.timesClicked);

  // This gets the first item from sortedArr i.e. key with most presses and sets the timesClicked to mostUsedKeyPresses
  let topKey = sortedArr[0].timesClicked;

  for (let i in keysArr) {
    let thisKey = keysArr[i];

    if (thisKey.timesClicked > 0.9 * topKey) {
      console.log("red");
      document.getElementById(thisKey.keyName).style.backgroundColor =
        "#e93f33";
    } else if (thisKey.timesClicked > 0.8 * topKey) {
    } else if (thisKey.timesClicked > 0.7 * topKey) {
    } else if (thisKey.timesClicked > 0.6 * topKey) {
    } else if (thisKey.timesClicked > 0.5 * topKey) {
    } else if (thisKey.timesClicked > 0.4 * topKey) {
    } else if (thisKey.timesClicked > 0.3 * topKey) {
    } else if (thisKey.timesClicked > 0.2 * topKey) {
    } else if (thisKey.timesClicked > 0.1 * topKey) {
    } else if (
      thisKey.timesClicked < 0.1 * topKey &&
      thisKey.timesClicked > 0
    ) {
    } else if (thisKey.timesClicked === 0) {
    } else {
    }
  }
}

/*
When topKey is 100 = A

90 - 100 = #e93f33
80 - 090 = #f3a433
70 - 080 = #e5d02c
60 - 070 = #d4f124
50 - 060 = #7ef360
40 - 050 = #5ec3a9
30 - 040 = #3d78ef
20 - 030 = #7f52fc
10 - 020 = #c15bff
00 - 010 = #cf5bee
0 - transparent

*/
