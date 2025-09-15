import React, { useContext } from 'react'
import MyContext from '../../config/myContext'

function Three({ clicked }) {

    const data = useContext(MyContext)
    return (
        <div>
            Three<br />
            {data.clicked}
        </div>
    )
}

export default Three
