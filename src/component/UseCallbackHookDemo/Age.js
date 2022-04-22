import React from 'react'

const Age = ({clickHandler }) => {

    console.log('Rendering Age Component')


    return (
        <>
            <button onClick={clickHandler}>Increment Age</button>
        </>
    )
}

export default React.memo(Age)