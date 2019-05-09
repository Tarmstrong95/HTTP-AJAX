import React from 'react';
import {Form, Input} from '../StyledComponents/styledComponents'

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
            <Form onSubmit={this.submit}>
                <Input name="name" onChange={this.handleChange} value={this.state.name} placeholder="Name" />
                <Input name="age" onChange={this.handleChange} value={this.state.age} placeholder="Age" />
                <Input name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" />
                <button>Submit</button>
                <h1 id='success' style={{display: 'none'}}>SUCCESS!</h1>
            </Form>
        )
    }

}

export default AddFriend;