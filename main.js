//main.js
const { app, BrowserWindow } = require('electron');

// main process setup title bar
const { setupTitlebar, attachTitlebarToWindow } = require('custom-electron-titlebar/main');

setupTitlebar();
// include the Node.js 'path' module at the top of your file
const path = require('path');


// modify your existing createWindow() function
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 500,
    frame: false,
    resizable: false,
    // titleBarOverlay: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      devTools: true,
      sandbox: false,
      preload: path.join(__dirname, 'preload.js'),
    },
    aspectRatio: 16 / 9
  });

  mainWindow.loadFile('./source/index.html');
  attachTitlebarToWindow(mainWindow);
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
