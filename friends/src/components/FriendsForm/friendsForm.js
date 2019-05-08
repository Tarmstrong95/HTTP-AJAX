import React from 'react';

class FriendForm extends React.Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }

    }

    submit = (e) => {
        e.preventDefault();
        this.props.addFriend(this.state.friend);
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }

    update = (e) => {
        e.preventDefault();
        this.props.friends.forEach(friend => {
            if(friend.name == this.state.friend.name){
                this.props.updateFriend(friend.id, this.state.updateFriend)
            }
        })
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            },
            updateFriend: {}
        })
    }

    onChange = (e) => {
        if (e.target.value != '') {
            this.setState({
                friend: {
                    ...this.state.friend,
                    [e.target.name]: e.target.value
                },
                updateFriend: {
                    ...this.state.updateFriend,
                    [e.target.name]: e.target.value
                }
            })
        }

    }


    render() {
        return (
            <form onSubmit={this.submit} style={{ display: "flex", flexFlow: "column" }}>
                <input name='name' onChange={this.onChange} value={this.state.friend.name} placeholder="Name" />
                <input name='age' onChange={this.onChange} value={this.state.friend.age} placeholder="Age" />
                <input name='email' onChange={this.onChange} value={this.state.friend.email} placeholder="Email" />
                <button>Submit</button>
                <button onClick={this.update} >Update</button>
            </form>
        )
    }
}

export default FriendForm;