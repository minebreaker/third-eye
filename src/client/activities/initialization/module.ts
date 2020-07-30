import { useEffect } from "react"
import { useStore } from "react-redux"
import { initializeAction } from "../../redux/actions/initialize"
import { INITIALIZE, INITIALIZED } from "../../../shared/eventBusActions/actions"
import { AppState } from "../../redux/reducer"


const ipcRenderer = window.require( "electron" ).ipcRenderer


export const useInitialize = () => {

    const store = useStore<AppState>()

    useEffect( () => {
        ipcRenderer.send( INITIALIZE )
        ipcRenderer.on( INITIALIZED, () => {
            store.dispatch( initializeAction( {
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
