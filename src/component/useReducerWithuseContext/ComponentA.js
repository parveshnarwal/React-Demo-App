import React, {useContext} from 'react'
import { CounterContext } from '../../App'

const ComponentA = () => {

const contextValue = useContext(CounterContext)
console.log(contextValue)

    return (
        <div>
            <h2>Count A : {contextValue.countState}</h2>
            <button onClick={() => contextValue.countDispatch('INCREMENT')}>Increment</button>
            <button onClick={() => contextValue.countDispatch('DECREMENT')}>Decrement</button>
            <button onClick={() => contextValue.countDispatch('RESET')}>Reset</button>
        </div>
    )
}

export default ComponentA