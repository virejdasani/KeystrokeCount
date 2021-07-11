"use strict";

const {
  app,
  BrowserWindow,
  Tray,
  globalShortcut,
  Menu,
  ipcMain,
} = require("electron");

// This is the npm package `open`, it is used here to open all links in an external browser
const open = require("open");

const path = require("path");

const ioHook = require("iohook");

const assetsDirectory = path.join(__dirname, "assets");

let tray = undefined;
let window = undefined;

// Hide the menu and dev tools
Menu.setApplicationMenu(null);

// Quit the app when the window is closed
app.on("window-all-closed", () => {
  hideWindow();
});

const createTray = () => {
  tray = new Tray(
    path.join(assetsDirectory, "trayIcons/keystrokeCountTrayIcon@2x.png")
  );
  tray.on("right-click", toggleWindow);
  tray.on("double-click", toggleWindow);
  tray.on("click", function (event) {
    toggleWindow();
  });
};

const createWindow = () => {
  window = new BrowserWindow({
    width: 900,
    height: 780,
    minWidth: 800,
    minHeight: 700,
    show: false,
    frame: false,

    // fullscreenable: false,
    // resizable: false,
    // alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  // This is so that app shows up on all desktops/workspaces
  window.setVisibleOnAllWorkspaces(true);

  // Load index.html
  window.loadURL(`file://${path.join(__dirname, "index.html")}`);

  // If 'esc' is pressed, hide the app window
  window.webContents.on("before-input-event", (event, input) => {
    if (input.key === "Escape") {
      hideWindow();
    }
  });

  // This opens all links with `target="_blank"` in external browser
  window.webContents.on("new-window", function (event, url) {
    event.preventDefault();
    open(url);
  });

  // Hide the window when it loses focus
  window.on("blur", () => {
    hideWindow();
  });

  // This is a global shortcut to activate app with hotkey(s)
  globalShortcut.register("Alt+Shift+k", () => {
    if (window.isVisible()) {
      hideWindow();
    } else {
      showWindow();
    }
  });
  if (process.platform == "darwin") {
    // Don't show the app in the dock for macOS
    app.dock.hide();
  } else {
    // To hide the app in the dock for windows and linux
    window.setSkipTaskbar(true);
  }
};

const toggleWindow = () => {
  if (window.isVisible()) {
    hideWindow();
  } else {
    showWindow();
  }
};

const showWindow = () => {
  window.show();
};

const hideWindow = () => {
  // This is required because app.hide() is not defined in windows and linux
  if (process.platform == "darwin") {
    // This is so that when reopening the window, the previous state is not remembered
    // window.reload()
    // Both of these are needed because they help restore focus back to the previous window
    app.hide();
    window.hide();
  } else {
    // This is so that when reopening the window, the previous state is not remembered
    // window.reload()
    // Both of these are needed because they help restore focus back to the previous window
    window.minimize();
    window.hide();
  }
};

// ioHook
// docs: https://wilix-team.github.io/iohook/usage.html#generic-node-application

var leftClicks = 0;
var rightClicks = 0;
var keysPressed = [];

app.on("ready", () => {
  createTray();
  createWindow();

  // When a mouse button is clicked
  ioHook.on("mouseclick", (event) => {
    // Check if it is a left-click
    if (event["button"] === 1) {
      leftClicks += 1;
      // This sends the clicks to index.js where this num of clicks are handled
      window.webContents.send("leftClickEvent", leftClicks);
    }

    // Check if it is a right-click
    else if (event["button"] === 2) {
      rightClicks += 1;
      // This sends the clicks to index.js where this num of clicks are handled
      window.webContents.send("rightClickEvent", rightClicks);
    }
  });

  // When a keyboard button is pressed
  ioHook.on("keydown", (event) => {
    // console.log(event);
    // Append the keycode for the key pressed to the keysPressed array
    keysPressed.unshift(event["keycode"]);
    // Send the message with the new array to the renderer process
    window.webContents.send("keydownEvent", keysPressed);
  });

  // Register and start hook
  ioHook.start();

  // Alternatively, pass true to start in DEBUG mode.
  ioHook.start(true);

  // False to disable DEBUG. Cleaner terminal output.
  // ioHook.start(false)
});
