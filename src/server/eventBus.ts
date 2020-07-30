import { ipcMain } from "electron"
import { INITIALIZE, UPDATE_DIRECTORY } from "../shared/eventBusActions/actions"


export const initializeEventBus = () => {
    ipcMain.on( INITIALIZE, initialize )
    ipcMain.on( UPDATE_DIRECTORY, updateDirectory )
}
