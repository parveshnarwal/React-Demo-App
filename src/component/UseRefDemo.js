import React, {useRef, useEffect} from 'react'

const UseRefDemo = () => {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef}></input>
        </div>
    )
}

export default UseRefDemo