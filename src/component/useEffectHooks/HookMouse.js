import React, { useEffect, useState } from 'react'

const HookMouse = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        console.log('useEffect is called')
        window.addEventListener('mousemove', logMousePostion)

        return () => {
            console.log('Component unmounted, remove event here / unsubscribe events')
            window.removeEventListener('mousemove', logMousePostion)
        }

    }, [])

    const logMousePostion = (e) => {
        console.log('Log mouse positon event was invoked!')
        setX(e.clientX)
        setY(e.clientY)
    }

    return (
        <div>
            X position : {x} <br/>
            Y position : {y}
        </div>
    )
}

export default HookMouse