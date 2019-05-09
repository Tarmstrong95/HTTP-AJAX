import React from 'react'
import {Form, Input} from '../StyledComponents/styledComponents'


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
            <Form onSubmit={this.submit}>
                <Input name="name" onChange={this.handleChange} value={this.state.friend.name} placeholder="Name" />
                <Input name="age" onChange={this.handleChange} value={this.state.friend.age} placeholder="Age" />
                <Input name="email" onChange={this.handleChange} value={this.state.friend.email} placeholder="Email" />
                <button>Submit</button>
            </Form>
        )
    }

}

export default UpdateFriend;