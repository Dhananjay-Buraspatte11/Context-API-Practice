import React from 'react'

const NavBar = (props) => {
    if (props.isLoggedIn===true) {
        return <button>Login</button>
    } else {
        return <button>Logout</button>
    }
 
}

export default NavBar