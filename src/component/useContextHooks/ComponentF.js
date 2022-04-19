import React from 'react'
import { UserContext } from '../../App'

const ComponentF = () => {
  return (
    <UserContext.Consumer>
      {
        user => {
          return <h2>Hello! {user}</h2>
        }
      }
    </UserContext.Consumer>
  )
}

export default ComponentF