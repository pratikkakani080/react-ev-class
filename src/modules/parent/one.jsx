import React from 'react'
import Three from './three'

function One({ setInputText, onChange, clicked }) {
    return (
        <div>
            One<br />
            <input type='text' onChange={(e) => onChange(e.target.value)} /><br />
            <Three clicked={clicked} />
        </div>
    )
}

export default One
