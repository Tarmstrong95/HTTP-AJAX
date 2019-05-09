import React from 'react';
import './friend.css';
import {Link} from 'react-router-dom'

const Friend = props => {
const friend = props.friends.find(
    pers => `${pers.id}` === props.match.params.id
)
if (!props.friends.length || !friend){
    return (<h1>Loading....</h1>)
}
    return (
        <div className='friendCard'>
        <nav>
            <Link to="/">Back To The List</Link>
        </nav>
            <h3>{friend.name}</h3>
            <h4>Age: {friend.age}</h4>
            <p><strong>Email:</strong> {friend.email} </p>
        </div>
    )
}

export default Friend;