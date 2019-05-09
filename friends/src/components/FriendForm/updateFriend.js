import React from 'react'
class UpdateFriend extends React.Component {
    state = {
        friend: {}
    }

    submit = (e) => {
        e.preventDefault();
        this.props.addFriend(this.state.friend)
        this.setState({
            friend: {}
        })
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
            <form onSubmit={this.submit}>
                <input name="name" onChange={this.handleChange} value={this.state.name} placeholder="Name" />
                <input name="age" onChange={this.handleChange} value={this.state.age} placeholder="Age" />
                <input name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" />
                <button>Submit</button>
            </form>
        )
    }

}

export default UpdateFriend;