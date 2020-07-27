import { Action } from "redux"


export type TruthyReducer<S, A extends Action> = (
    state: S,
    action: A
) => S
