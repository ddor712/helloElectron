const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width:800,
        height:600
    })
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    }) // This is for mac if the app is running and no windows are open it will open one
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})