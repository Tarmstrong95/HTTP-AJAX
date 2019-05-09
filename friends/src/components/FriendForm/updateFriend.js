import React from 'react';
import Form from './form';


class UpdateFriend extends React.Component {
    state = {
        friend: {
            name: this.props.friend.name,
            age: this.props.friend.age,
            email: this.props.friend.email
        }
    }

    submit = (e) => {
        e.preventDefault();
        this.props.updateFriend(this.props.friend.id, this.state.friend)
        document.getElementById('success').style.display = 'block';
    }

    handleChange = (e) => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }
    render() {
        return (
            <Form handleChange={this.handleChange} submit={this.submit} friend={this.state.friend}/>
        )
    }

}

export default UpdateFriend;