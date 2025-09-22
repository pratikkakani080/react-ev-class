import React, { useContext } from 'react'
import Four from './4'
import NewContext from '../../config/newContext'

function Two() {
    const { inputText } = useContext(NewContext)

    return (
        <div>
            2
            {inputText}
            <Four />
        </div>
    )
}

export default Two
