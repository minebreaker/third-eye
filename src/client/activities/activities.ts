import { InitializationActivity } from "./initialization/view"
import { MainActivity } from "./main/view"


export type Activity =
    typeof INITIALIZATION_ACTIVITY |
    typeof MAIN_ACTIVITY

export const INITIALIZATION_ACTIVITY = "initialization"
export const MAIN_ACTIVITY = "main"

export const getActivity = ( activity?: Activity ) => {
    switch ( activity ) {
        case INITIALIZATION_ACTIVITY:
        case undefined:
            return InitializationActivity
        case MAIN_ACTIVITY:
            return MainActivity
    }
}
