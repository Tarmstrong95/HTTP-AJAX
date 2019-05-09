import React from 'react';
import Form from './form';

class AddFriend extends React.Component {
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    }

    submit = (e) => {
        e.preventDefault();
        this.props.addFriend(this.state.friend)
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        })
        document.getElementById('success').style.display = 'block';
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }


    render() {
        return (
            <Form handleChange={this.handleChange} submit={this.submit} friend={this.state.friend} />
        )
    }

}

export default AddFriend;