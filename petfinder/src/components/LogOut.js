import React from 'react'
import { NavLink } from 'react-router-dom'

function LogOut() {
    return (
        <div className='logout'>
            <NavLink to='/'>Logout</NavLink>
            <h1>See You Soon!</h1>
        </div>
    )
}

export default LogOut