const ipcMain = require( "electron" ).ipcMain


const UPDATE_DIRECTORY = "updateDirectory"

export const initializeEventBus = () => {
    ipcMain.on( UPDATE_DIRECTORY, ( _event, _arg ) => {
        // TODO
    } )
}
