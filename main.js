const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const Store = require('electron-store');

// Create an instance of electron-store
const store = new Store();

let mainWindow; // Declare mainWindow at a higher scope

app.on('ready', () => {
    mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.maximize();
  mainWindow.loadFile(path.join(__dirname, 'src/views/authentication.html'));
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

// Define an IPC event to retrieve user phone
ipcMain.on('get-store-phone', (event) => {
  const phone = store.get('phone');
  console.log("phone no : " , phone)
  event.reply('phone-no', phone);
});

// Define an IPC event to retrieve user data(full name)
ipcMain.on('get-user-data', (event) => {
  const user = store.get('fullName');
  console.log("user-data : " , user)
  event.reply('user-data', user);
});



app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

})