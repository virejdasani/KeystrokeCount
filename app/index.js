const { ipcRenderer } = require("electron")

ipcRenderer.on('take-reply', (event, arg) => {
  console.log(arg)
})
ipcRenderer.send('send-message', 'send')



// TODO - add functionality for numbers and symbols
let total = 0

const el = document.querySelector("#count")

window.addEventListener("keydown", (e) => {
  ipcRenderer.send("button-pressed");
  
    total++
    el.innerHTML += e.key

    // This iterates over all keys in the keys.js, keys array and if it finds a matching letter/key, it adds 1 to the numClicked for that key object
    for (let i = 0; i < keys.length; i++) {
        // We don't distinguish between upper and lower case letter, hence, the .toLowerCase
        if (keys[i].letter == e.key.toLowerCase()) {
            keys[i].numClicked += 1
            console.log(keys[i].letter + " Clicked " + keys[i].numClicked + " times")
        }
    }
})