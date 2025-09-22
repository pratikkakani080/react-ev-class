import React, { useState } from 'react'
import NewContext from '../newContext'

function NewContextProvider({ children }) {

    const [buttonClicked, setButtonClicked] = useState('')
    const [inputText, setInputText] = useState('')

    return (
        <NewContext.Provider value={{ buttonClicked, setButtonClicked, inputText, setInputText }}>
            {children}
        </NewContext.Provider>
    )
}

export default NewContextProvider
