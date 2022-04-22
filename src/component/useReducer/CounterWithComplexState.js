import React , {useReducer}from 'react'

const initialState = {
    firstCounter : 0
}

const reducer = (state, action) => {

    switch(action.type){
        case 'INCREMENT' :
            return {firstCounter : state.firstCounter + 1}
        
        case 'DECREMENT' :
            return {firstCounter : state.firstCounter - 1}

        case 'RESET' :
            return initialState

        default :
            return state
    }
}

const CounterWithComplexState = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h2>Count : {count.firstCounter}</h2>
            <button onClick={() => dispatch({type : 'INCREMENT'})}>Increment</button>
            <button onClick={() => dispatch({type :'DECREMENT'})}>Decrement</button>
            <button onClick={() => dispatch({type :'RESET'})}>Reset</button>
        </div>
    )
}

export default CounterWithComplexState