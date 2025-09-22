import React, { memo } from 'react'

function Desc({ calculation, increment }) {
    console.log('test');

    return (
        <>
            <button onClick={increment}>+</button>
            <h2>Expensive Calculation</h2>
            {calculation}
        </>
    )
}

export default memo(Desc)
