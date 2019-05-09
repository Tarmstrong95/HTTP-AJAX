import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>{' '}
            <Link to="/friends">Friends List</Link>{' '}
            <Link to="/form">Add A Friend</Link>
        </nav>
    )
}

export default Nav;
