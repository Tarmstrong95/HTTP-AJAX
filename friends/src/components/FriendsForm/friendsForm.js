import React from 'react';

class FriendForm extends React.Component {
    state = {
        friend: {
            id: '',
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
                id: '',
                name: '',
                age: '',
                email: ''
            }
        })
    }

    onChange = (e) => {
        this.setState({
            friend: {
                ...this.state.friend,
                id: this.props.friendLen + 1,
                [e.target.name]: e.target.value
            }
        })
    }
    render() {
        return (
            <form onSubmit={this.submit} style={{ display: "flex", flexFlow: "column" }}>
                <input name='name' onChange={this.onChange} value={this.state.friend.name} placeholder="Name" />
                <input name='age' onChange={this.onChange} value={this.state.friend.age} placeholder="Age" />
                <input name='email' onChange={this.onChange} value={this.state.friend.email} placeholder="Email" />
                <button>Submit</button>
            </form>
        )
    }
}

export default FriendForm;