import React, { useState } from 'react'

function useStorage(props) {
    console.log(props);

    const getValue = (key) => {
        return JSON.parse(localStorage.getItem(key))
    }
    const setLocal = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    }
    const removeValue = (key) => {
        localStorage.removeItem(key)
    }
    const removeAll = () => {
        localStorage.clear()
    }
    return [setLocal, getValue, removeValue, removeAll]
}

export default useStorage
