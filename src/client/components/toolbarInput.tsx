import React from "react"
import { useSelector } from "react-redux"
import { AppState } from "../redux/reducer"


export const ToolbarInput: React.FC = () => {

    const currentPath = useSelector( selectToolbarInput )

    return (
        <div>
            <input type="text" value={currentPath} onChange={console.log} />
        </div>
    )
}

const selectToolbarInput: ( state: AppState ) => string = state => {
    return state.currentPath
}
