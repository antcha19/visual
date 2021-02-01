
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

function createWindow() {
    let win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    //manera1
  /*  win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        //barras de la ruta
        slashes: true
    }));*/

    //manera2
    win.loadFile('index.html');
 
}

app.on('ready', createWindow);
