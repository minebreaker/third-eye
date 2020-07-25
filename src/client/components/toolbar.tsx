import React from "react"
import { createUseStyles } from "react-jss"
import * as Icons from "./icons"
import { ToolbarInput } from "./toolbarInput"


export const Toolbar: React.FC = () => {

    const classes = useToolbarStyles()
    const { onClickBack, onClickForward, onClickUpward, onClickConfig } = useToolbar()

    return (
        <div className={classes.layout}>
            <ToolbarButton onClick={onClickBack} Icon={Icons.ArrowBack} />
            <ToolbarButton onClick={onClickForward} Icon={Icons.ArrowForward} />
            <ToolbarButton onClick={onClickUpward} Icon={Icons.ArrowUpward} />
            <div className={classes.grow}>
                <ToolbarInput />
            </div>
            <ToolbarButton onClick={onClickConfig} Icon={Icons.Config} />
        </div>
    )
}

const useToolbar = () => {
    return {
        onClickBack: () => {},
        onClickForward: () => {},
        onClickUpward: () => {},
        onClickConfig: () => {}
    }
}

const useToolbarStyles = createUseStyles( {
    layout: {
        display: "flex",
        justifyContent: "start",
        flexFlow: "row nowrap"
    },
    grow: {
        flexGrow: 2
    }
} )

type ToolbarButtonProps = {
    onClick: () => void
    Icon: React.FC<{ size: string }>
}

export const ToolbarButton: React.FC<ToolbarButtonProps> = props => {

    const classes = useToolbarButtonStyles()

    return (
        <div className={classes.wrapper} onClick={props.onClick}>
            <props.Icon size={"36px"} />
        </div>
    )
}

const useToolbarButtonStyles = createUseStyles( {
    wrapper: {
        height: "48px",
        width: "48px",
        cursor: "pointer"
    }
} )
