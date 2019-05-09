import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar} from '../StyledComponents/styledComponents'
import './nav.css'

const Nav = () => {
    return (
        <Navbar>
            <Link class='navlink' to="/">Home</Link>{' '}
            <Link class='navlink' to="/friends">Friends List</Link>{' '}
            <Link class='navlink' to="/form">Add A Friend</Link>
        </Navbar>
    )
}

export default Nav;
