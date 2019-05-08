import React from 'react';

const Friend = props => {
    const friend = props.friend;

    const remove = (e) => {
        e.preventDefault();
        props.deleteFriend(friend.id)
    }
    return (
        <div>
            <h1>{friend.name}</h1>
            <h3>Age: {friend.age}</h3>
            <p>Email: {friend.email}</p>
            <button onClick={remove}>Delete Friend</button>
        </div>
    )
}

export default Friend;