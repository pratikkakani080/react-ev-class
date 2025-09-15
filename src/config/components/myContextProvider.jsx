import React, { useState } from 'react'
import MyContext from '../myContext'

function MyContextProvider({ children }) {

    const [clicked, setClicked] = useState('')

    return (
        <MyContext.Provider value={{ clicked: clicked, setClicked }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider
