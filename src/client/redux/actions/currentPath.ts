import { CHANGE_CURRENT_PATH } from "../actions"
import { AppState } from "../reducer"
import { TruthyReducer } from "../utils"


export type ChangeCurrentPathAction = {
    type: typeof CHANGE_CURRENT_PATH
    newPath: string
}

export const changeCurrentPathAction: ( path: string ) => ChangeCurrentPathAction = newPath =>
    ({ type: CHANGE_CURRENT_PATH, newPath })

export const reduceCurrentPath: TruthyReducer<AppState, ChangeCurrentPathAction> = ( state, action ) => {
    return { ...state, currentPath: action.newPath }
}

