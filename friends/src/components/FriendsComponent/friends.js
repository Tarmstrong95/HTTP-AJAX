import React from 'react';
import Friend from './friend'

const FriendsList = props => {
    return (
        <>
            {props.friends.map(friend => <Friend friend={friend} />)}
        </>
    )
}

export default FriendsList;