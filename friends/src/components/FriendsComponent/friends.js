import React from 'react';
import './friend.css';
import { Link } from 'react-router-dom';

const FriendsList = props => {

    const removeFriend = (id) => (
        props.deleteFriend(id)
    )

    function routeToItem(ev, friend) {
        ev.preventDefault();
        props.history.push(`/friends/${friend.id}`);
      }

    return (
        <div className="friendCont" >
            {
                props.friends.map( (friend, i) =>
                    <div key={i} className='friendCard'>
                        <h3>{friend.name}</h3>
                        <h4>Age: {friend.age}</h4>
                        <p><strong>Email:</strong> {friend.email} </p>
                        <div className="linkCont">
                            <Link onClick={ev => routeToItem(ev, friend)} className="updateButton" to={`/friends/${friend.id}`}>Update info</Link>
                        </div>
                        <div>
                            <button className="deleteBtn" onClick={() => removeFriend(friend.id)} >Delete Friend</button>
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default FriendsList;