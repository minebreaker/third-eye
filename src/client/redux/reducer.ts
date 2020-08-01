import { Reducer } from "redux"
import { Config } from "../../shared/entities/config"
import { Activity, INITIALIZATION_ACTIVITY } from "../activities/activities"
import { Actions, CHANGE_CURRENT_PATH, INITIALIZE } from "./actions"
import { reduceCurrentPath } from "./actions/currentPath"
import { reduceInitialize } from "./actions/initialize"


export type AppState = {
    activity: Activity
    currentPath: string
    root: Directory
    config: Config
}

export const defaultState: AppState = {
    activity: INITIALIZATION_ACTIVITY,
    currentPath: "",
    root: { name: "", files: [] },
    config: {}
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
