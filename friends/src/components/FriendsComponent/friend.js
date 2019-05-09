import React from 'react';
import './friend.css';
import UpdateFriend from '../FriendForm/updateFriend'
import axios from 'axios';

class Friend extends React.Component {
    state = {
        friend: null
    }


componentDidMount(){
    axios.get(`http://localhost:5000/friends/${this.props.match.params.id}`)
    .then(res => this.setState({ friend: res.data }))
    .catch(err => console.log(err))
}

render(){
    if(!this.state.friend) {
            return (<h1>Loading....</h1>)
        }
    return (
        <>
            <div className='friendCard'>
                <h3>{this.state.friend.name}</h3>
                <h4>Age: {this.state.friend.age}</h4>
                <p><strong>Email:</strong> {this.state.friend.email} </p>
            </div>
            <UpdateFriend friend={this.state.friend} updateFriend={this.props.updateFriend} />
        </>
    )
}
    
}

export default Friend;