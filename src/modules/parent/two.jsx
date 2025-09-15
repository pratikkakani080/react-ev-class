import React, { useContext } from 'react'
import Four from './four'
import Server from '../../config/global'

function Two({ inputText, setClicked }) {
    const data = useContext(Server)

    return (
        <div>
            Two<br />
            {data.server?.inputText}<br />
            <Four setClicked={setClicked} />
        </div>
    )
}

export default Two
