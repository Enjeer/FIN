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
    width: 620,
    height: 600,
    minWidth: 500,
    minHeight: 450,
    // frame: false,
    // titleBarOverlay: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      devTools: true,
      sandbox: false,
      preload: path.join(__dirname, 'preload.js')
    }
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
