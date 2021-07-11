function virtualKeyClick() {
  // Get the array from localStorage
  let keysArr = JSON.parse(localStorage.getItem("localKeys"));

  // This removes the leftClick and rightClick keys from keysArr
  keysArr = removeByAttr(keysArr, "keyCode", 134761167);
  keysArr = removeByAttr(keysArr, "keyCode", 4164761167);

  // Loop over all keys from keysArr
  for (let i in keysArr) {
    // This is the current or 'i'th object in the array
    let thisKey = keysArr[i];

    // Check if thisKey is an element in the html
    if (document.getElementById(thisKey.keyName)) {
      // When that key is pressed, to this
      document.getElementById(thisKey.keyName).addEventListener("click", () => {
        // This is the innerHTML of the key
        let keyInnerHTML = document.getElementById(thisKey.keyName).innerHTML;
        if (keyInnerHTML.includes("<b>")) {
          // The innerHTML is changed to the times that key is pressed
          document.getElementById(
            thisKey.keyName
          ).innerHTML = `</br><span id="timesClickedKeyText">${thisKey.timesClicked}</span>`;
          // In the 5 seconds, the initial innerHTML is restored in that key
          setTimeout(() => {
            document.getElementById(thisKey.keyName).innerHTML = keyInnerHTML;
          }, 5000);
        } else {
          // The innerHTML is changed to the times that key is pressed
          document.getElementById(
            thisKey.keyName
          ).innerHTML = `<span id="timesClickedKeyText">${thisKey.timesClicked}</span>`;
          // In the 5 seconds, the initial innerHTML is restored in that key
          setTimeout(() => {
            document.getElementById(thisKey.keyName).innerHTML = keyInnerHTML;
          }, 5000);
        }
      });
    }
  }
}
