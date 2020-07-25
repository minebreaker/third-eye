import React from "react"
import ReactDOM from "react-dom"
import { Application } from "./application"


document.addEventListener( "DOMContentLoaded", () => {
    ReactDOM.render(
        <Application />,
        document.getElementById( "app" )
    )
} )
