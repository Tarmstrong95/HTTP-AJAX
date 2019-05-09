import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import axios from 'axios';
import FriendsList from './components/FriendsComponent/friends';
import Friend from './components/FriendsComponent/friend';

class App extends React.Component {
  state = {
    friends: [],
  }


  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then((res) => { this.setState({ friends: res.data }) })
      .catch((err) => { console.log(err) })
  }


  addFriend = (friend) => {
    axios.post('http://localhost:5000/friends', {
      id: friend.id,
      name: friend.name,
      age: parseInt(friend.age),
      email: friend.email
    })
      .then(res => { this.setState({ friends: res.data }) })
      .catch(err => { console.log(err) })
  }

  updateFriend = (id, update) => {
    axios.put(`http://localhost:5000/friends/${id}`, update)
      .then(res => { this.setState({ friends: res.data }) })
      .catch(err => console.log(err))
  }

  deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">



        <Route exact path="/" render={(props) =>
          <FriendsList {...props} friends={this.state.friends} deleteFriend={this.deleteFriend} />
        } />
        <Route path="/:id" render={props => <Friend {...props} friends={this.state.friends} />}/>
      </div>
    );
  }

}

export default App;
