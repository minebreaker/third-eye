import * as React from "react"
import { useInitialize } from "./module"


export const InitializationActivity: React.FC = () => {

    useInitialize()

    return (
        <div>
            Loading...
        </div>
    )
}
