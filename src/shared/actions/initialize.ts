import { INITIALIZE } from "../redux/actions"
import { AppState } from "../redux/reducer"


export type InitializeAction = {
    type: typeof INITIALIZE
}

export const initializeAction: () => InitializeAction = () =>
    ({ type: INITIALIZE })

export const reduceInitialize: ( state?: AppState, action?: InitializeAction ) => AppState = (
    state,
    action
) => {
    state  // TODO
    action

    return initializeApp()
}

const initializeApp: () => AppState = () => {

    return {
        currentPath: "",
        root: {
            name: "root", files: [
                { name: "C", files: [] },
                { name: "D", files: [] },
                { name: "E", files: [] }
            ]
        },
        config: {}
    }
}
