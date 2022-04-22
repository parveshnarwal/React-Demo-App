import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {...state, firstCounter: state.firstCounter + action.value }

        case 'DECREMENT':
            return {...state, firstCounter: state.firstCounter - action.value }

        case 'INCREMENT_2':
            return {...state, secondCounter: state.secondCounter + action.value }

        case 'DECREMENT_2':
            return {...state, secondCounter: state.secondCounter - action.value }

        case 'RESET':
            return initialState

        default:
            return state
    }
}

const MultipleCounters = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h2>First Counter : {count.firstCounter}</h2>
            <button onClick={() => dispatch({ type: 'INCREMENT', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'INCREMENT', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'DECREMENT', value: 5 })}>Decrement 5</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>

            <h2>Second Counter : {count.secondCounter}</h2>
            <button onClick={() => dispatch({ type: 'INCREMENT_2', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT_2', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'INCREMENT_2', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'DECREMENT_2', value: 5 })}>Decrement 5</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    )
}

export default MultipleCounters