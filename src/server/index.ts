import electron = require( "electron" )


const { app, BrowserWindow, Menu } = electron

function createWindow() {
    const win = new BrowserWindow( {
        webPreferences: {
            nodeIntegration: true
        }
    } )

    win.loadFile( "../client/index.html" )

    if ( process.env.NODE_ENV !== "production" ) {
        win.webContents.openDevTools()
    }

    const menu = Menu.buildFromTemplate( [
        {
            label: "File",
            submenu: [ { role: "quit" } ]
        },
        {
            label: "Help",
            submenu: [ { label: "DevTool", click: () => win.webContents.openDevTools() } ]
        }
    ] )
    win.setMenu( menu )
    Menu.setApplicationMenu( menu )
}

app.whenReady().then( createWindow )

app.on( "window-all-closed", () => {
    if ( process.platform !== "darwin" ) {
        app.quit()
    }
} )

app.on( "activate", () => {
    if ( BrowserWindow.getAllWindows().length === 0 ) {
        createWindow()
    }
} )
