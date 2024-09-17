//preload.js

const { Titlebar, Color, TitlebarColor } = require('custom-electron-titlebar');
const { contextBridge, ipcRenderer } = require('electron');

const path = require('path');
const { title } = require('process');

contextBridge.exposeInMainWorld('api', {
  runPythonScript: (scriptPath, args) => ipcRenderer.invoke('run-python-script', { scriptPath, args })
});

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }

  const options = {
    backgroundColor: TitlebarColor.fromHex('#191920'),
    closeable: true,
    icon:  path.join(__dirname, '/source/img/secondLOGO.png'), 
    // icons: {
    //   minimize: path.join(__dirname, '/source/img/minimize.png'),
    //   maximize: path.join(__dirname, '/source/img/maximize.png'),
    //   restoreDown: path.join(__dirname, '/source/img/restore.png'),
    //   close: path.join(__dirname, '/source/img/close.png')
    // }
  };

  new Titlebar(options);
});