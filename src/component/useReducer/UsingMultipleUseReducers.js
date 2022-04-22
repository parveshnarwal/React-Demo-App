import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state, action) => {

    switch (action) {
        case 'INCREMENT':
            return state + 1

        case 'DECREMENT':
            return state - 1

        case 'RESET':
            return initialState

        default:
            return state
    }
}

const UsingMultipleUseReducers = () => {

    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    return (
        <>
            <div>
                <h2>First Counter : {count}</h2>
                <button onClick={() => dispatch('INCREMENT')}>Increment</button>
                <button onClick={() => dispatch('DECREMENT')}>Decrement</button>
                <button onClick={() => dispatch('RESET')}>Reset</button>
            </div>
            <div>
                <h2>Second Counter : {countTwo}</h2>
                <button onClick={() => dispatchTwo('INCREMENT')}>Increment</button>
                <button onClick={() => dispatchTwo('DECREMENT')}>Decrement</button>
                <button onClick={() => dispatchTwo('RESET')}>Reset</button>
            </div>
        </>
    )
}

export default UsingMultipleUseReducers