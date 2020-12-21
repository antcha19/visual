
const { app, BrowserWindow } = require('electron');

const electron = require('electron');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    // remove default chromium menu
   // mainWindow.setMenu(null);

    mainWindow.loadFile('index.html');
}
//opcion1
//app.on('ready', createWindow);

//opcion 2
app.whenReady().then(createWindow);





//proceso
//creo carpeta helloword
//1.-npm init
//2.-package.json poner start electron
//3.-npm install --save -verbose electron 
//4.-creo el index.html
//5.-importamos modules de electron
//6.-codigo main.js