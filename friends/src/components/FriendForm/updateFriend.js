import React from 'react'
class UpdateFriend extends React.Component {
    state = {
        friend: {}
    }

    submit = (e) => {
        e.preventDefault();
        this.props.updateFriend(this.props.id, this.state.friend)
        this.setState({
            friend: {}
        })
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
            <form onSubmit={this.submit}>
                <input name="name" onChange={this.handleChange} value={this.state.friend.name} placeholder="Name" />
                <input name="age" onChange={this.handleChange} value={this.state.friend.age} placeholder="Age" />
                <input name="email" onChange={this.handleChange} value={this.state.friend.email} placeholder="Email" />
                <button>Submit</button>
            </form>
        )
    }

}

export default UpdateFriend;