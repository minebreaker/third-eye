import { Reducer } from "redux"
import { reduceCurrentPath } from "../actions/currentPath"
import { reduceInitialize } from "../actions/initialize"
import { Actions, CHANGE_CURRENT_PATH, INITIALIZE } from "./actions"


export type AppState = {
    currentPath: string
    root: Directory
}

export const rootReducer: Reducer<AppState, Actions> = ( state, action ) => {
    if ( !state ) {
        return reduceInitialize()
    }

    switch ( action.type ) {
        case INITIALIZE:
            return reduceInitialize( state, action )
        case CHANGE_CURRENT_PATH:
            return reduceCurrentPath( state, action )
    }
}
