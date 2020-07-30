import React from "react"
import { createUseStyles } from "react-jss"
import { NavTree } from "../../components/navTree"
import { QuickAccess } from "../../components/quickAccess"
import { Toolbar } from "../../components/toolbar"


const useStyles = createUseStyles( () => ({
    mainPane: {
        height: "100%",
        display: "flex"
    },
    navTree: {
        flexGrow: 2
    }
}) )

export const MainActivity: React.FC = () => {

    const classes = useStyles()

    return (
        <div>
            <Toolbar />
            <div className={classes.mainPane}>
                <QuickAccess />
                <div className={classes.navTree}>
                    <NavTree />
                </div>
            </div>
        </div>
    )
}
