import React, { useState } from 'react'
import One from './one'
import Two from './two'

export default function Parent() {
    const [inputText, setInputText] = useState('')
    const [clicked, setClicked] = useState('')
    console.log(clicked);

    const fetchData = (value) => {
        setInputText(value)
    }
    return (
        <div>
            parent
            <One setInputText={setInputText} onChange={fetchData} clicked={clicked} />

            <Two inputText={inputText} setClicked={setClicked} />

        </div>
    )
}
