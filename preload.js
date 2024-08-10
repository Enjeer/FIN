//preload.js

const { Titlebar, Color, TitlebarColor } = require('custom-electron-titlebar');

const path = require('path');
const { title } = require('process');

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }

  const options = {
    backgroundColor: TitlebarColor.fromHex('#767676'),
    closeable: true,
    icon:  path.join(__dirname, '/source/img/secondLOGO.png'), 
    // icons: {
    //   minimize: './source/img/minimize.png',
    //   maximize: './source/img/maximize.png',
    //   restoreDown: './source/img/restore.png',
    //   close: './source/img/close.png'
    // }
  };

  new Titlebar(options);
});