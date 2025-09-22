import React, { useContext } from 'react'
import Three from './3'
import NewContext from '../../config/newContext'

function One() {
    const { setInputText } = useContext(NewContext)

    return (
        <div>
            1
            <input type='text' onChange={e => setInputText(e.target.value)} />
            <Three />
        </div>
    )
}

export default One
