
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import styled from "styled-components";

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (data.firstname.length < 15) {
            return;
        }
    };
  return (
    <DivWrapper>
        
        <h1>LOGIN</h1>

        <StyledForm action="post" onSubmit={handleSubmit(onSubmit)}>

            <input {...register("firstname", {maxLength : 15})} placeholder="Username" />
            <input {...register("password", { required: true, minLength : 6 })} placeholder="Password" />
			{errors.firstname && <p>First name must be 15 characters long maximum.</p>}
			{errors.password && <p>Password must be at least 6 characters long.</p>}
			<input type="submit" value="SE CONNECTER" className="submit"/>
        </StyledForm>
    </DivWrapper>
  )
}

const DivWrapper = styled.div`

background-color: #090d20;
margin: 0;
padding: 0;

h1 {
    color: white;
    text-align: center;
    margin-top: 2%;
}

`

const  StyledForm = styled.form `

/* display:flex;
flex-direction: column; */
width: 80%;
margin: auto;
height: 100vh;

input {
    display: block;
    width: 85%;
    margin-top: 2%;
    height: 3em;
    padding-left: 1%;
}

.submit {
    background-color: #ee639b;
    height: 2.5em;
    border-radius: 6px;
    border: solid 1px black;
    font-size: 4vh ;
    color: white;
    letter-spacing: 1.9px;
    padding: 0;
}


`
