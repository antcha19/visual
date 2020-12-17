const electron=require('electron');
const app=electron.app;
const BrowserWindow=electron.BrowserWindow;
const path = require('path');
const url = require('url');
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';


function createWindow() {
 let win=new BrowserWindow({
    webPreferences: {         
            nodeIntegration: true,
            enableRemoteModule: true
        },
  });
  win.loadURL(url.format({
    pathname:path.join(__dirname,'index.html'),
    protocol:'file',
    slashes:true
  }));

  win.webContents.openDevTools();
  win.on('closed',() =>{
    win=null;
  })

}

app.on('ready',createWindow);