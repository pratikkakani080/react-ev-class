import React from 'react'
import Four from './four'

function Two({ inputText, setClicked }) {
    return (
        <div>
            Two<br />
            {inputText}<br />
            <Four setClicked={setClicked} />
        </div>
    )
}

export default Two
