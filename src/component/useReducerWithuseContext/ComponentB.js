import React, {useContext} from 'react'
import { CounterContext } from '../../App'

const ComponentB = () => {

    const contextValue = useContext(CounterContext)

    return (
        <div>
            <h2>Count B : {contextValue.countState}</h2>
            <button onClick={() => contextValue.countDispatch('INCREMENT')}>Increment</button>
            <button onClick={() => contextValue.countDispatch('DECREMENT')}>Decrement</button>
            <button onClick={() => contextValue.countDispatch('RESET')}>Reset</button>
        </div>
    )
}

export default ComponentB