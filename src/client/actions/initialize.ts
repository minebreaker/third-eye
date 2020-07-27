import { INITIALIZE } from "../redux/actions"
import { AppState } from "../redux/reducer"


export type InitializeAction = {
    type: typeof INITIALIZE
}

export const initialize: () => InitializeAction = () =>
    ({ type: INITIALIZE })

export const reduceInitialize: ( state?: AppState, action?: InitializeAction ) => AppState = (
    state,
    action
) => {
    state
    action
    return {
        currentPath: "",
        root: {
            name: "root", files: [
                { name: "C", files: [] },
                { name: "D", files: [] },
                { name: "E", files: [] }
            ]
        }
    }
}
