import { useEffect } from "react"
import { useStore } from "react-redux"
import { INITIALIZE, INITIALIZED } from "../../../shared/eventBusActions/actions"
import { initializeAction } from "../../redux/actions/initialize"
import { AppState } from "../../redux/reducer"
import { MAIN_ACTIVITY } from "../activities"


const ipcRenderer = window.require( "electron" ).ipcRenderer


export const useInitialize = () => {

    const store = useStore<AppState>()

    useEffect( () => {
        ipcRenderer.send( INITIALIZE )
        ipcRenderer.on( INITIALIZED, () => {
            store.dispatch( initializeAction( {
                activity: MAIN_ACTIVITY,
                currentPath: "",
                root: {
                    name: "", files: [
                        { name: "C", files: [] },
                        { name: "D", files: [] },
                        { name: "E", files: [] }
                    ]
                },
                config: {}
            } ) )
        } )
        // TODO: remove renderer on leave
    }, [ store ] )
}
