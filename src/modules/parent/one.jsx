import React, { useContext } from 'react'
import Three from './three'
import Server from '../../config/global'

function One({ setInputText, onChange, clicked }) {
    const data = useContext(Server)

    return (
        <div>
            One<br />
            {/* <input type='text' onChange={(e) => onChange(e.target.value)} /><br /> */}
            <input type='text' onChange={(e) => data.setServer({ ...data.server, inputText: e.target.value })} /><br />
            <Three clicked={clicked} />
        </div>
    )
}

export default One
