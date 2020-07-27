import { CHANGE_CURRENT_PATH } from "../redux/actions"
import { AppState } from "../redux/reducer"
import { TruthyReducer } from "../redux/utils"


export type ChangeCurrentPathAction = {
    type: typeof CHANGE_CURRENT_PATH
    newPath: string
}

export const changeCurrentPath: ( path: string ) => ChangeCurrentPathAction = newPath =>
    ({ type: CHANGE_CURRENT_PATH, newPath })

export const reduceCurrentPath: TruthyReducer<AppState, ChangeCurrentPathAction> = ( state, action ) => {
    return { ...state, currentPath: action.newPath }
}
