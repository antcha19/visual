// THE usual one we use:
const {app, BrowserWindow} = require('electron')

function createWindow () {
 let mainWindow = new BrowserWindow({
 width: 300,
 height: 330,
 webPreferences: {
 nodeIntegration: true
 }
 })
 // remove default chromium menu
 mainWindow.setMenu(null);
 mainWindow.loadFile('index.html')
 // Open the DevTools.
 // mainWindow.webContents.openDevTools ()
}

app.whenReady().then(createWindow);


//proceso
//creo carpeta helloword
//tengop que tener main.js
//1.-npm init
//2.-package.json poner start electron
//3.-npm install --save -verbose electron
//4.-creo el index.html
//5.-importamos modules de electron
//6.-codigo main.js
//7.-npm start