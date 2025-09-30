import React, { useReducer } from 'react'

const initialState = {
    count: 0,
    title: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 }
        case 'decrement':
            return { ...state, count: state.count - 1 }
        case 'textChange':
            return { ...state, title: action.value }
        default:
            return state
    }
}

export default function UseRed() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div>
                count: {state.count}
                text: {state.title}
            </div>
            <div>
                <button onClick={() => dispatch({
                    type: 'increment',
                })}>Increment</button>
            </div>
            <div>
                <button onClick={() => dispatch({
                    type: 'decrement',
                })}>Decrement</button>
            </div>
            <div>
                <input type='text' onChange={(e) => dispatch({ type: 'textChange', value: e.target.value })} />
            </div>
        </>
    )
}
