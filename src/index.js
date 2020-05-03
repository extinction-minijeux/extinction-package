const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  return app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    'width': 820,
    'height': 660,
    'webPreferences': {
      'plugins': true,
      'nodeIntegration': true
    },
    'frame': true,
    'icon': path.join(__dirname, 'icon.png')
  });
  mainWindow.setMenuBarVisibility(false);
  // and load the URL of the app
  mainWindow.loadURL("https://www.extinction-minijeux.fr/executable.html");
  mainWindow.webContents.on('did-finish-load', () => {
    setMainMenu(mainWindow); // Load the menu with mainWindow
  });
};

function setMainMenu(mainWindow) {
  const template = [
    {
      label: 'Zoom',
      submenu: [
        {
          type: 'radio',
          label: '100%',
          checked: false,
          click() {
            let code = `document.getElementById('jeu').classList.add('full')`;
            mainWindow.webContents.executeJavaScript(code);
          }
        },
        {
          type: 'radio',
          checked: true,
          label: 'Afficher tout',
          click() {
            let code = `document.getElementById('jeu').classList.remove('full')`;
            mainWindow.webContents.executeJavaScript(code);
          }
        }
      ]
    }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
  mainWindow.setMenuBarVisibility(true);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
// load flash
let ppapi_flash_path;
if(process.platform  == 'win32'){
  ppapi_flash_path = path.join(__dirname, 'pepflashplayer.dll');
} else if (process.platform == 'linux') {
  ppapi_flash_path = path.join(__dirname, 'libpepflashplayer.so');
} else if (process.platform == 'darwin') {
  ppapi_flash_path = app.getPath('pepperFlashSystemPlugin');
}

app.commandLine.appendSwitch('ppapi-flash-path', ppapi_flash_path);
app.commandLine.appendSwitch('ppapi-flash-version', '32.0.0.363');
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
