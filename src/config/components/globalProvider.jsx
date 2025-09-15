import React, { useState } from 'react'
import Server from '../global'

function GlobalProvider({ children }) {

    const [server, setServer] = useState({})


    return (
        <Server.Provider value={{ server, setServer }}>
            {children}
        </Server.Provider>
    )
}

export default GlobalProvider
