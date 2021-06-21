const {
    ipcRenderer
} = require("electron")

const leftClick = document.getElementById("leftClick")
const rightClick = document.getElementById("rightClick")

ipcRenderer.on('leftClickEvent', (event, message) => {
    leftClick.innerHTML = "Number of left clicks: " + message
})

ipcRenderer.on('rightClickEvent', (event, message) => {
    rightClick.innerHTML = "Number of right clicks: " + message
})

// TODO - add functionality for numbers and symbols
let total = 0


window.addEventListener("keydown", (e) => {
    // Everytime any button is pressed, broadcast "key-pressed"
    ipcRenderer.send("key-pressed")

    total++
    // el.innerHTML += e.key

    // This iterates over all keys in the keys.js, keys array and if it finds a matching letter/key, it adds 1 to the numClicked for that key object
    for (let i = 0; i < keys.length; i++) {
        // We don't distinguish between upper and lower case letter, hence, the .toLowerCase
        if (keys[i].letter == e.key.toLowerCase()) {
            keys[i].numClicked += 1
            console.log(keys[i].letter + " Clicked " + keys[i].numClicked + " times")
        }
    }
})