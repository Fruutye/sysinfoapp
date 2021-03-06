const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + '/img/bob.png',
        webPreferences:{
            nodeIntegration:true

        }


    });

    win.loadFile('index.html');

   win.webContents.openDevTools();

    win.on('closed', function () {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (win === null) {
        createWindow()
    }
});