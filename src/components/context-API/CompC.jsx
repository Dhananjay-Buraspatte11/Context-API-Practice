import React from 'react'
import { firstName, lastName } from '../../App'
const CompC = () => {
    return (
        <div>
            <firstName.Consumer>{(fname) => {
                return (
                    <lastName.Consumer>{(lname) => {
                        return (
                            <>
                                <h1>{fname}</h1>
                                <h1>{lname}</h1>
                            </>
                        )
                    }}</lastName.Consumer>
                )
            }}</firstName.Consumer>
        </div>
    )
}

export default CompC