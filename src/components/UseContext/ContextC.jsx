
//Using useContext
import React, { useContext } from 'react'
import { firstName,lastName } from '../../App'

const ContextC = () => {
    const fname=useContext(firstName);
    const lname=useContext(lastName);
  return (
    <div>
        <h1>`My FirstName is ${fname} and my lastName is ${lname}`</h1>
    </div>
  )
}

export default ContextC