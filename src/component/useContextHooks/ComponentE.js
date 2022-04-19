import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext } from '../../App'


const ComponentE = () => {

  const name = useContext(UserContext)


  return (
    <div>
      <ComponentF />
      Username is {name}
    </div>
  )
}

export default ComponentE