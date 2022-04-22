import React, {useState} from 'react'
import useInput from '../../hooks/useInput'

const UserForm = () => {

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello, ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Firt Name : {firstName}</label>
            <input type="text" {...bindFirstName}></input>
            <br></br>
            <label>Last Name : {lastName}</label>
            <input type="text" {...bindLastName}></input>
            <br></br>
            <button type="submit">SUBMIT</button>
        </form>
    )
}

export default UserForm