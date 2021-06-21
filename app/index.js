const {
    ipcRenderer
} = require("electron")

const leftClick = document.getElementById("leftClick")
const rightClick = document.getElementById("rightClick")
const keydown = document.getElementById("keydown")

// TODO - when message is received from main process, set message to local storage

// When left click is detected
ipcRenderer.on('leftClickEvent', (event, message) => {
    leftClick.innerHTML = "Number of left clicks: " + message
})

// When right click is detected
ipcRenderer.on('rightClickEvent', (event, message) => {
    rightClick.innerHTML = "Number of right clicks: " + message
})

// When a key press is detected
ipcRenderer.on('keydownEvent', (event, message) => {
    keydown.innerHTML = "Key codes for keys pressed: " + message
})