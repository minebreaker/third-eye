import React from "react"
import { createUseStyles } from "react-jss"


type NavTreeItemProps = {
    file: Directory
}

export const NavTreeItem: React.FC<NavTreeItemProps> = ( props ) => {

    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <span>{props.file.name}</span>
        </div>
    )
}

const useStyles = createUseStyles( {
    wrapper: {
        width: "100%",
        height: "24px",
        padding: "0.4em"
    },
    fileName: {
        fontSize: 14
    }
} )
