import React, {useState, useEffect} from 'react'
import './style.css'

function HookCounter() {

    const [count, setCount] = useState(0)
    const [name, setname] = useState('')

    useEffect(() => {
        console.log('useEffect Called  - Updating document title')
        document.title = `Counter value is ${count}`
    }, [count])


    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            <input type="text" onChange={(e) => setname(e.target.value)}  value={name}></input>
        </div>
    )
}

export default HookCounter