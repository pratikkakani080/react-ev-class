import React, { useContext } from 'react'
import NewContext from '../../config/newContext'

function Three() {
    const { setButtonClicked } = useContext(NewContext)

    return (
        <div>
            3
            <button onClick={() => setButtonClicked('Button clicked')}>Click me</button>
        </div>
    )
}

export default Three
