
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import styled from "styled-components"; //Style library
//UseContext
import { useContext } from "react";
import { UserContext } from "../App";

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const userContext = useContext(UserContext);

    const onSubmit = () => {

        userContext.setAuth();
        // console.log(data);
    };
  return (
    <DivWrapper>
        
        <h1>LOGIN</h1>

        <StyledForm action="post" onSubmit={handleSubmit(onSubmit)}>

            <input {...register("firstname", {maxLength : 15})} placeholder="Username" />
            <input {...register("password", { required: true, minLength : 6 })} type="password" placeholder="Password" />
			{errors.firstname && <p>First name must be 15 characters long maximum.</p>}
			{errors.password && <p>Password must be at least 6 characters long.</p>}
			{/* <input type="submit" value="SE CONNECTER" className="submit" onClick={onSubmit}/> */}

            {
                userContext.isLogged ?
                (<input type="submit" value="SE DÉCONNECTER" className="submit" onClick={onSubmit}/>)
                :
                (<input type="submit" value="SE CONNECTER" className="submit" onClick={onSubmit}/>)
            }
        </StyledForm>
    </DivWrapper>
  )
}

const DivWrapper = styled.div`

background-color: #090d20;
margin: 0;
height: 100vh;
padding: 0;

h1 {
    color: white;
    text-align: center;
    margin-top: 0%;
}

p {
    color: white;
}

`

const  StyledForm = styled.form `

width: 80%;
margin: auto;
margin-left: 15%;

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
    width: 86.5%;
    border-radius: 6px;
    border: solid 1px black;
    font-size: 3.4vh ;
    color: white;
    letter-spacing: 1.9px;
    padding: 0;
}


`
