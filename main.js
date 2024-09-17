const { app, BrowserWindow, ipcMain } = require('electron'); // Include ipcMain here
const { spawn } = require('child_process'); // Import spawn to run Python scripts

// main process setup title bar
const { setupTitlebar, attachTitlebarToWindow } = require('custom-electron-titlebar/main');

setupTitlebar();
// include the Node.js 'path' module at the top of your file
const path = require('path');

// modify your existing createWindow() function
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 520,
    height: 520,
    minWidth: 500,
    minHeight: 500,
    frame: false,
    icon: __dirname + 'source/img/icon.png',
    webPreferences: {
      nodeIntegration: true,
      devTools: true,
      sandbox: false,
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true
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

// IPC Handler for running Python scripts
ipcMain.handle('run-python-script', async () => {
  return new Promise((resolve, reject) => {
    const scriptPath = path.join(__dirname, 'source/python_scripts/app.py'); // Ensure this path is correct
    const pyProg = spawn('python', [scriptPath]);

    let data = '';
    pyProg.stdout.on('data', (stdout) => {
      data += stdout.toString();
    });

    pyProg.stderr.on('data', (stderr) => {
      console.error(`stderr: ${stderr}`);
    });

    pyProg.on('close', (code) => {
      if (code === 0) {
        resolve(data);
      } else {
        reject(new Error(`Process exited with code ${code}`));
      }
    });
  });
});