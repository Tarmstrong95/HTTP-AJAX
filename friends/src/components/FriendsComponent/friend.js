import React from 'react';
import './friend.css';
import UpdateFriend from '../FriendForm/updateFriend'

const Friend = props => {
const friend = props.friends.find(
    pers => `${pers.id}` === props.match.params.id
)
if (!props.friends.length || !friend){
    return (<h1>Loading....</h1>)
}
    return (
        <>
        <div className='friendCard'>
            <h3>{friend.name}</h3>
            <h4>Age: {friend.age}</h4>
            <p><strong>Email:</strong> {friend.email} </p>
        </div>
        <UpdateFriend friend={friend} updateFriend={props.updateFriend}/>
        </>
    )
}

export default Friend;