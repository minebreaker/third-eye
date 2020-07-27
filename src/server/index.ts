import electron = require( "electron" )
import eventBus = require("./eventBus")


const { app, BrowserWindow, Menu } = electron


function main() {

    app.whenReady().then( async () => {
        await eventBus.initializeEventBus()
        await createWindow()
    } )

    app.on( "window-all-closed", () => {
        if ( process.platform !== "darwin" ) {
            app.quit()
        }
    } )

    app.on( "activate", () => {
        if ( BrowserWindow.getAllWindows().length === 0 ) {
            createWindow().then()
        }
    } )
}

async function createWindow() {
    const win = new BrowserWindow( {
        webPreferences: {
            nodeIntegration: true
        },
        title: "Third Eye"
    } )

    await win.loadFile( "../client/index.html" )

    if ( process.env.NODE_ENV !== "production" ) {
        win.webContents.openDevTools()
    }

    Menu.setApplicationMenu( null )
}

main()
