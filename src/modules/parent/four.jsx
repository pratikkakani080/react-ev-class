import React from 'react'

function Four({ setClicked }) {
    return (
        <div>
            Four<br />
            <button onClick={() => setClicked('clicked')}>Click me</button>
        </div>
    )
}

export default Four
