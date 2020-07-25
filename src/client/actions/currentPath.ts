import { Reducer } from "redux"
import { CHANGE_CURRENT_PATH } from "../redux/actions"


export type ChangeCurrentPathAction = {
    type: typeof CHANGE_CURRENT_PATH
    newPath: string
}

export const changeCurrentPath: ( path: string ) => ChangeCurrentPathAction = newPath =>
    ({ type: CHANGE_CURRENT_PATH, newPath })

export const currentPathReducer: Reducer<string, ChangeCurrentPathAction> = ( state = "", action ) => {
    switch ( action.type ) {
        case CHANGE_CURRENT_PATH:
            return action.newPath
        default:
            return state
    }
}
