import React from 'react'
import One from './1'
import Two from './2'
import useStorage from '../../hooks/useStorage'
import useFetch from '../../hooks/useFetch'

function Prime() {
    const [setLocal, getValue, removeValue, removeAll] = useStorage({})
    const data = useFetch('https://jsonplaceholder.typicode.com/posts')
    console.log(data);

    console.log(getValue('second'));


    return (
        <div>
            Prime
            <button onClick={() => setLocal('test', 'data')}>Set data</button>
            <button onClick={() => setLocal('second', 'value')}>Set values</button>
            <One />
            <Two />
        </div>
    )
}

export default Prime
