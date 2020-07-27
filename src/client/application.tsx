import React from "react"
import { createUseStyles } from "react-jss"
import { Provider as StoreProvider } from "react-redux"
import { store } from "../shared/redux/store"
import { NavTree } from "./components/navTree"
import { QuickAccess } from "./components/quickAccess"
import { Toolbar } from "./components/toolbar"
import { EventBus } from "./electron/eventBus"


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
    },
    mainPane: {
        height: "100%",
        display: "flex"
    },
    navTree: {
        flexGrow: 2
    }
}) )

export const Application = () => {

    const classes = useStyles()

    return (
        <StoreProvider store={store}>
            <EventBus>
                <div className={classes.root}>
                    <Toolbar />
                    <div className={classes.mainPane}>
                        <QuickAccess />
                        <div className={classes.navTree}>
                            <NavTree />
                        </div>
                    </div>
                </div>
            </EventBus>
        </StoreProvider>
    )
}
