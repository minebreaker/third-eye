import electron = require( "electron" )


const { app, BrowserWindow, Menu } = electron

function createWindow() {
    const win = new BrowserWindow( {
        webPreferences: {
            nodeIntegration: true
        },
        title: "Third Eye"
    } )

    win.loadFile( "../client/index.html" )

    if ( process.env.NODE_ENV !== "production" ) {
        win.webContents.openDevTools()
    }

    Menu.setApplicationMenu( null )
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
