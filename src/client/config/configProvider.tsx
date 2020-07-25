import React, { useEffect } from "react"


export type Config = {}

export const ConfigContext = React.createContext<Config | null>( null )

export const ConfigProvider: React.FC = ( props ) => {
    const [ config, setConfig ] = React.useState<Config | null>( null )

    useEffect( () => {
        setConfig( {} )
    }, [] )

    return <ConfigContext.Provider value={config}>{props.children}</ConfigContext.Provider>
}
