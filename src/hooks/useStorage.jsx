import React from 'react'

function useStorage(props) {
    console.log(props);

    const getValue = (key) => {
        return JSON.parse(localStorage.getItem(key))
    }
    const setLocal = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    }
    return { setLocal, getValue }
}

export default useStorage
