import React, { useEffect, useRef, useState } from 'react'
import One from './one'
import Two from './two'

export default function Parent() {
    const [inputText, setInputText] = useState('')
    const [clicked, setClicked] = useState('')
    const [text, setText] = useState('')

    const myRef = useRef(null)
    const dataRef = useRef('')

    useEffect(() => {
        console.log(myRef);
        myRef.current.style.color = 'red'

    }, [myRef])

    const fetchData = (value) => {
        setInputText(value)
    }
    return (
        <div>
            parent
            <div ref={myRef}>
                testing
            </div>
            <input type='text' onChange={(e) => dataRef.current = e.target.value} />
            <input type='text' onChange={(e) => setText(e.target.value)} />

            state: {text}
            ref: {dataRef.current}

            <button onClick={() => {
                console.log(dataRef);

            }}>Check</button>

            <One setInputText={setInputText} onChange={fetchData} clicked={clicked} dataRef={dataRef} />

            <Two inputText={inputText} setClicked={setClicked} />

        </div>
    )
}
