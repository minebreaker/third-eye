import { ipcMain } from "electron"
import { InitializeArg, INITIALIZED } from "../../shared/eventBusActions/actions"
import fs = require( "fs" )
import os = require( "os" )


export const initialize = ( _event: Electron.IpcMainEvent, _arg: InitializeArg ) => {
    // TODO:
    // 1. Determine current path
    // 2. Request directory update

    // Determine the path to show by fallowing order
    // 1. Application argument
    // 2. A directory specified by the config
    // 3. Home directory
    // FIXME
    const currentPath = os.homedir()

    // Read all files at the current path
    fs.readdir( currentPath, ( e, files ) => {
        if ( e ) {
            console.log( e )
            return
        }

        console.log( files.length )

        // FIXME
        ipcMain.emit( INITIALIZED )
        //_event.reply()
    } )
}
