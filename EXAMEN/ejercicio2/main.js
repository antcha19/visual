const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

function createWindow() {
    let win = new BrowserWindow({
        width: 400,
        height: 300,
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


//proceso
//creo carpeta helloword
//1.-npm init
//2.-package.json poner start electron
//3.-npm install --save -verbose electron 
//4.-creo el index.html
//5.-importamos modules de electron
//6.-codigo main.js