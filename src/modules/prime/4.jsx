import React, { useContext } from 'react'
import NewContext from '../../config/newContext'

function Four() {
    const { buttonClicked } = useContext(NewContext)
    return (
        <div>
            4
            {buttonClicked}
        </div>
    )
}

export default Four
