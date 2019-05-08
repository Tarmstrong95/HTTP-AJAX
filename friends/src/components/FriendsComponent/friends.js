import React from 'react';
import Friend from './friend'

const FriendsList = props => {
    return (
        <>
            {props.friends.map(friend => <Friend deleteFriend={props.deleteFriend} friend={friend} />)}
        </>
    )
}

export default FriendsList;