import { ChangeCurrentPathAction } from "./actions/currentPath"
import { InitializeAction } from "./actions/initialize"


export type Actions =
    InitializeAction |
    ChangeCurrentPathAction

export const INITIALIZE = "initialize"
export const CHANGE_CURRENT_PATH = "changeCurrentPath"
