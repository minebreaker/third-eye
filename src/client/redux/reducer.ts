import { combineReducers } from "redux"
import { currentPathReducer } from "../actions/currentPath"


export type AppState = {
    currentPath: string
    root: Directory
}

export const rootReducer = combineReducers<AppState>( {
    currentPath: currentPathReducer,
    // FIXME
    root: ( state = {
        name: "root", files: [
            { name: "C", files: [] },
            { name: "D", files: [] },
            { name: "E", files: [] }
        ]
    } ) => state
} )
