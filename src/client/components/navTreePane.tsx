import React from "react"
import { createUseStyles } from "react-jss"
import { NavTreeItem } from "./navTreeItem"


type NavTreePaneProps = {
    directory: Directory
}

export const NavTreePane: React.FC<NavTreePaneProps> = ( props ) => {

    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            {props.directory.files.map( ( file, i ) => {
                    return i === props.directory.files.length - 1
                        ? <NavTreeItem key={file.name} file={file} />
                        : <React.Fragment key={file.name}>
                            <NavTreeItem file={file} />
                            <hr className={classes.separator} />
                        </React.Fragment>
                }
            )}
        </div>
    )
}

const useStyles = createUseStyles( {
    wrapper: {
        width: "180px"
    },
    separator: {}
} )
