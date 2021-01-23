/* eslint-disable no-console */
import { app, BrowserWindow } from 'electron'
import isDev from 'electron-is-dev'
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'

console.log('starting Electron...')

let mainWindow: BrowserWindow;
const mainWindowConfig = {
  width: 1280,
  height: 720,
  minWidth: 1280,
  minHeight: 720,
  frame: true,
  transparent: false,
  webPreferences: {
    // preload: path.join(app.getAppPath(), 'preload.js'),
    nodeIntegration: true,
    webSecurity: false,
  },
}

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', () => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
}

function onReady() {
  console.log(`${app.getVersion()}`); // eslint-disable-line
  mainWindow = new BrowserWindow(mainWindowConfig)
  const fileName = isDev ? 'http://localhost:3000/index.html' : `file://${__dirname}/index.html`
  if (isDev) {
    mainWindow.webContents.openDevTools({
      mode: 'undocked',
    })
  }
  mainWindow.loadURL(fileName)
  mainWindow.on('close', () => app.quit())
}

app.on('ready', () => onReady())
app.on('window-all-closed', () => app.quit())
app.commandLine.appendSwitch('ignore-certificate-errors', 'true')
app.whenReady().then(() => {
  if (isDev) {
    [REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS].forEach((extension) => {
      installExtension(extension)
        .then((name) => console.log(`Added Extension: ${name}`))
        .catch((err) => console.log('An error occurred: ', err))
    })
  }
})
