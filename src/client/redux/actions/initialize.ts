import { INITIALIZE } from "../actions"
import { AppState, defaultState } from "../reducer"


export type InitializeAction = {
    type: typeof INITIALIZE
    state: AppState
}

export const initializeAction: ( state: AppState ) => InitializeAction = ( state ) =>
    ({ type: INITIALIZE, state })

export const reduceInitialize: ( state?: AppState, action?: InitializeAction ) => AppState = (
    _state,
    action
) => {

    if ( action ) {
        return action.state
    }

    return defaultState
}
