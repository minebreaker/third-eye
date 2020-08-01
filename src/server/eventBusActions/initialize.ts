import { ipcMain } from "electron"
import { INITIALIZED } from "../../shared/eventBusActions/actions"


type InitializeArg = {}

export const initialize = ( _event: Electron.IpcMainEvent, _arg: InitializeArg ) => {
    // TODO:
    // Determine current path
    // Request directory update

    ipcMain
    INITIALIZED
    //ipcMain.emit( INITIALIZED )
}
