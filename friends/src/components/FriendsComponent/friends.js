import React from 'react';
import './friend.css';
import { Link } from 'react-router-dom';

const FriendsList = props => {

    const removeFriend = (id) => (
        props.deleteFriend(id)
    )

    return (
        <div className="friendCont" >
            {
                props.friends.map(friend =>
                    <div className='friendCard'>
                        <h3>{friend.name}</h3>
                        <h4>Age: {friend.age}</h4>
                        <p><strong>Email:</strong> {friend.email} </p>
                        <div className="linkCont">
                            <Link className="updateButton" to={`/friends/${friend.id}`}>Update info</Link>
                        </div>
                        <div>
                            <button onClick={() => removeFriend(friend.id)} >Delete Friend</button>
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default FriendsList;