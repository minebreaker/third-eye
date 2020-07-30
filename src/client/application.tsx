import React from "react"
import { createUseStyles } from "react-jss"
import { Provider as StoreProvider } from "react-redux"
import { store } from "./redux/store"


const useStyles = createUseStyles( () => ({
    "@global": {
        body: {
            backgroundColor: "white",
            margin: 0,
            fontFamily: `"Hiragino Kaku Gothic ProN", "Noto Sans", "Helvetica Neue", Helvetica, "Segoe UI", Meiryo, "sans-serif"`
        }
    },
    root: {
        height: "100vh"
    }
}) )

export const Application = () => {

    const classes = useStyles()

    return (
        <StoreProvider store={store}>
            <div className={classes.root} />
        </StoreProvider>
    )
}
