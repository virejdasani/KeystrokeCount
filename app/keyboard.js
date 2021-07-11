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
      // Check if the button is not disabled. Only if it isn't disabled, addEventListener
      if (
        !document.getElementById(thisKey.keyName).className.includes("disabled")
      ) {
        // When that key is pressed, to this
        document
          .getElementById(thisKey.keyName)
          .addEventListener("click", () => {
            // This is the innerHTML of the key
            let keyInnerHTML = document.getElementById(
              thisKey.keyName
            ).innerHTML;
            if (keyInnerHTML.includes("<b>")) {
              // The innerHTML is changed to the times that key is pressed
              document.getElementById(
                thisKey.keyName
              ).innerHTML = `</br><span id="timesClickedKeyText">${thisKey.timesClicked}</span>`;
              // In the 5 seconds, the initial innerHTML is restored in that key
              setTimeout(() => {
                document.getElementById(thisKey.keyName).innerHTML =
                  keyInnerHTML;
              }, 5000);
              // If it is an arrow key, do this because for some reason without this, it doesn't work
            } else if (
              document
                .getElementById(thisKey.keyName)
                .className.includes("Arrow")
            ) {
              var arrow;

              // For arrow keys, set the arrow code to the arrow variable
              if (
                document
                  .getElementById(thisKey.keyName)
                  .className.includes("leftArrow")
              ) {
                arrow = "&#x25C0;";
              } else if (
                document
                  .getElementById(thisKey.keyName)
                  .className.includes("downArrow")
              ) {
                arrow = "&#x25BC;";
              } else if (
                document
                  .getElementById(thisKey.keyName)
                  .className.includes("upArrow")
              ) {
                arrow = "&#x25B2;";
              } else if (
                document
                  .getElementById(thisKey.keyName)
                  .className.includes("rightArrow")
              ) {
                arrow = "&#x25B6;";
              }

              // The innerHTML is changed to the times that key is pressed
              document.getElementById(
                thisKey.keyName
              ).innerHTML = `<span id="timesClickedKeyText">${thisKey.timesClicked}</span>`;
              // In the 5 seconds, the initial innerHTML is restored in that key
              setTimeout(() => {
                document.getElementById(
                  thisKey.keyName
                ).innerHTML = `</br>${arrow}`;
              }, 5000);
            } else if (
              document
                .getElementById(thisKey.keyName)
                .className.includes("option")
            ) {
              // The innerHTML is changed to the times that key is pressed
              document.getElementById(
                thisKey.keyName
              ).innerHTML = `<span id="timesClickedKeyText">${thisKey.timesClicked}</span>`;
              // In the 5 seconds, the initial innerHTML is restored in that key
              setTimeout(() => {
                document.getElementById(thisKey.keyName).innerHTML =
                  "<span>option</span>";
              }, 5000);
            } else {
              // The innerHTML is changed to the times that key is pressed
              document.getElementById(
                thisKey.keyName
              ).innerHTML = `<span id="timesClickedKeyText">${thisKey.timesClicked}</span>`;
              // In the 5 seconds, the initial innerHTML is restored in that key
              setTimeout(() => {
                document.getElementById(thisKey.keyName).innerHTML =
                  keyInnerHTML;
              }, 5000);
            }
          });
      }
    }
  }
}
