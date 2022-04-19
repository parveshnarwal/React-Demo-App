import React, { useState } from 'react'
import './style.css'

function HookCounterAdvance() {

    const initialCount = 0 

    const [count, setCount] = useState(initialCount)

    const incrementBy5 = () => {
        for(let i = 0; i < 5; i++){
            setCount(previousValue => previousValue + 1)
        }
    }

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(previousValue => previousValue + 1)}>Increment</button>
            <button onClick={() => setCount(previousValue => previousValue - 1)}>Decrement</button>
            <button onClick={incrementBy5}>Increment 5</button>
        </div>
    )
}

export default HookCounterAdvance