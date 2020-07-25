import React from "react"
import { createUseStyles } from "react-jss"
import { useSelector } from "react-redux"
import { AppState } from "../redux/reducer"
import { NavTreePane } from "./navTreePane"


export const NavTree: React.FC = () => {

    const classes = useStyles()
    const rootPath = useSelector( selectRootPath )
    const displayingDirectories = [ rootPath ]  // TODO

    return (
        <div className={classes.wrapper}>
            {displayingDirectories.map( dir => <NavTreePane key={dir.name /* FIXME */} directory={dir} /> )}
        </div>
    )
}

const useStyles = createUseStyles( {
    wrapper: {
        width: "1vw",
        display: "flex",
        flexDirection: "row"
    }
} )

const selectRootPath = ( state: AppState ) => state.root
