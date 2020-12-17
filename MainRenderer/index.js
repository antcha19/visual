console.log('from index.js');

const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

let secondwindow = new BrowserWindow({
    webPreferences:
    {
        nodeIntegration: true,
        enableRemoteModule: true
    },
});


secondwindow.loadURL(url.format({
        pathname:path.join(__dirname,'secondwindow.html'),
        protocol:'file',
        slashes:true
      }));

secondwindow.webContents.openDevTools();
secondwindow.on('closed',() =>{
    secondwindow=null;
});






//proceso
//creo carpeta helloword
//1.-npm init
//2.-package.json poner start electron
//3.-npm install --save -verbose electron 
//4.-creo el index.html
//5.-importamos modules de electron
//6.-codigo main.js
//7.-npm start