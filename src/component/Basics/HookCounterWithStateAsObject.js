import React, { useState } from 'react'

const HookCounterWithStateAsObject = () => {

    const [name, setname] = useState({firstName : '', lastName : ''})


    return (
        <form>
            <input type="text" onChange={(e) => setname({...name, firstName : e.target.value})}></input>
            <input type="text" onChange={(e) => setname({...name, lastName : e.target.value})}></input>

            <h2>Your first name is : {name.firstName}</h2>
            <h2>Your last name is : {name.lastName}</h2>
        </form> 
    )
}

export default HookCounterWithStateAsObject