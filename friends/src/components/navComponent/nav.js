import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../StyledComponents/styledComponents'
import './nav.css'

const Nav = () => {
    return (
        <Navbar>
            <Link className='navlink' to="/">Home</Link>{' '}
            <Link className='navlink' to="/friends">Friends List</Link>{' '}
            <Link className='navlink' to="/form">Add A Friend</Link>
        </Navbar>
    )
}

export default Nav;
