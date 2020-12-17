console.log('from index.js');

const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');
const newWindowBton = document.getElementById('newWindowbton');
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

let window2 = new BrowserWindow({
    webPreferences:
    {
        nodeIntegration: true,
        enableRemoteModule: true
    },
});


window2.loadURL(url.format({
    pathname: path.join(__dirname, 'index2.html'),
    protocol: 'file',
    slashes: true
}));

window2.webContents.openDevTools();
window2.on('closed', () => {
    window2 = null;
});

newWindowBton.addEventListener('click', function (event) {
    let winthree = new BrowserWindow({
        webPreferences: {
            nativeWindowOpen: true,
            nodeIntegration: true
        },
    });
});

winthree.loadURL(url.format({
    pathname: path.join(__dirname, 'index3.html'),
    protocol: 'file',
    slashes: true
}));

