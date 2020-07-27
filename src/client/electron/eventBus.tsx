import { IpcRendererEvent } from "electron"
import React, { useEffect } from "react"
import { useStore } from "react-redux"


const ipcRenderer = window.require( "electron" ).ipcRenderer


export const EventBus: React.FC = ( props ) => {

    const store = useStore()

    useEffect( () => {
        ipcRenderer.on( "changeGlobalState", ( _event: IpcRendererEvent, arg: any ) => {

            const validated = validateArg( arg )
            if ( validated ) {
                store.dispatch( arg )
            } else {
                // TODO
                // store.dispatchErrorAction
                console.error( "eventBus error" )
            }
        } )
    }, [] )

    return (
        <>{props.children}</>
    )
}

const validateArg = ( arg: any ) => {

    if ( !Object.prototype.hasOwnProperty.call( arg, "type" ) ) {
        return null
    }

    return arg
}
