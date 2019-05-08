import React from 'react';

const Friend = props => {
    const friend = props.friend;
    return (
        <div>
            <h1>{friend.name}</h1>
            <h3>Age: {friend.age}</h3>
            <p>Email: {friend.email}</p>
        </div>
    )
}

export default Friend;