import React from 'react';
import styled from 'styled-components'

export const Form = styled.form`
display: flex;
flex-flow: column;
width: 100%;
margin: 30px auto;
`;

export const Input = styled.input`
margin: 0 0 5px 0;
width: 100%;
border: none;
border-bottom: 1px solid black;
background-color: rgb(0, 0, 0, 0);
text-align: center;
font-size: 1rem;
`;

export const Navbar = styled.nav`
padding: 10px;
background-color: rgb(0, 0, 0, 0.100);
`

export default Form;