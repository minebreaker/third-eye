// Server side actions

/**
 * An action which is sent when client is initialized.
 */
export const INITIALIZE = "initialize"
export type InitializeArg = {}

/**
 * An action which is sent when a client requests update of a specific directory.
 */
export const UPDATE_DIRECTORY = "updateDirectory"


// Client side actions

/**
 * An action which is sent when `INITIALIZE` activity is finished.
 */
export const INITIALIZED = "initialized"
