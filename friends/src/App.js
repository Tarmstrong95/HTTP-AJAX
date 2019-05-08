import React from 'react';
import './App.css';
import {Router} from 'react-router-dom';
import axios from 'axios';
import FriendsList from './components/FriendsComponent/friends';
import FriendForm from './components/FriendsForm/friendsForm'

class App extends React.Component {
  state = {
    friends: []
  }


componentDidMount(){
  axios.get('http://localhost:5000/friends')
  .then( (res) => { this.setState({ friends: res.data }) } )
  .catch( (err) => {console.log(err)} )
}


addFriend = (friend) => {
  axios.post('http://localhost:5000/friends', {
    id: friend.id,
    name: friend.name,
    age: parseInt(friend.age),
    email: friend.email
  })
  .then(res => { this.setState({ friends: res.data })})
  .catch( err => {console.log(err)})
}

updateFriend = (id, update) => {
 axios.put(`http://localhost:5000/friends/${id}`, update)
 .then(res => { this.setState({ friends: res.data }) })
 .catch(err => console.log(err))
}

render(){
  return (
    <div className="App">
      <FriendsList friends={this.state.friends} /> 
      <FriendForm updateFriend={this.updateFriend} friends={this.state.friends} addFriend={this.addFriend}/>
    </div>
  );
}
  
}

export default App;
