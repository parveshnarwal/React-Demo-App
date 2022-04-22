import React from 'react'

const Salary = ({ clickHandler }) => {

    console.log('Rendering Salary Component')

    return (
        <>
            <button onClick={clickHandler}>Increment Salary</button>
        </>
    )
}

export default React.memo(Salary)