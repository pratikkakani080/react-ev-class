import React, { useContext } from 'react'
import MyContext from '../../config/myContext'

function Four({ setClicked }) {
    const data = useContext(MyContext)
    return (
        <div>
            Four<br />
            {/* <button onClick={() => setClicked('clicked')}>Click me</button> */}
            <button onClick={() => data.setClicked('clicked')}>Click me</button>
        </div>
    )
}

export default Four
