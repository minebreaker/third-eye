import { ipcMain } from "electron"
import { INITIALIZE, UPDATE_DIRECTORY } from "../shared/eventBusActions/actions"
import { initialize } from "./eventBusActions/initialize"
import { updateDirectory } from "./eventBusActions/updateDirectory"


export const initializeEventBus = () => {
    ipcMain.on( INITIALIZE, initialize )
    ipcMain.on( UPDATE_DIRECTORY, updateDirectory )
}
