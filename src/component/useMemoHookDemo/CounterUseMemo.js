import React, {useState, useMemo} from 'react'


const CounterUseMemo = () => {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementCountOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementCountTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0

        while(i < 2000000000){
            i++
        }

        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <div>
            <button onClick={incrementCountOne}>Counter 1 - {counterOne}</button>
            <span> { isEven ? ' Even' : ' Odd' }</span>
            <button onClick={incrementCountTwo}>Counter 2 - {counterTwo}</button>
        </div>
    )
}

export default CounterUseMemo