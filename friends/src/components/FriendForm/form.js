import React from 'react'
import {FormStyle, Input} from '../StyledComponents/styledComponents'

const Form = props => {
    return (
        <FormStyle onSubmit={props.submit}>
                <Input name="name" onChange={props.handleChange} value={props.friend.name} placeholder="Name" />
                <Input name="age" onChange={props.handleChange} value={props.friend.age} placeholder="Age" />
                <Input name="email" onChange={props.handleChange} value={props.friend.email} placeholder="Email" />
                <button>Submit</button>
                <h1 id='success' style={{display: 'none'}}>SUCCESS!</h1>
        </FormStyle>
    )
}

export default Form;