import React from "react"
import { createUseStyles } from "react-jss"
import * as Icons from "./icons"


export const QuickAccess: React.FC = () => {

    const classes = useStyles()

    return (
        <div className={classes.wrapper}>
            <QuickAccessButton label="Root" Icon={Icons.Computer} />
            <QuickAccessButton label="Home" Icon={Icons.Home} />
        </div>
    )
}


type ButtonProps = {
    label: string
    Icon: React.ReactNode
}

const QuickAccessButton: React.FC<ButtonProps> = props => {

    const classes = useStyles()

    return (
        <div className={classes.button}>
            {props.label}
        </div>
    )
}

const useStyles = createUseStyles( {
    wrapper: {
        width: "180px",
        borderRight: "solid 1px"
    },
    button: {
        width: "100%",
        height: "48px",
        "&:hover": {
            backgroundColor: "lightblue",
            cursor: "pointer"
        }
    }
} )
