import React from 'react'
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"; //Form library 
import styled from "styled-components"; //Style library

export default function Home() {

    const [pokemon, setpokemon] = useState({});

    //ComponentDidMount
    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon/1')
        .then(res => res.json())
        .then (res => {

            const namePokemon = res.forms[0].name;
            console.log("test type 1",res.types[0].type.name);
            const typesPokemon = (res.types).map(type => {
                console.log(("types :"));
                return type.type.name + ', ';
            })
            console.log(res);

            setpokemon({name : namePokemon, height : res.height, weight : res.weight, type : typesPokemon, });

        })

    }, [])



  return (
    <DivWrapper>

        <div className="div-content">

        <h1>HOME</h1>

        <input type="button" value="GET A POKEMON" className="button"/>

        <div className="infos">

        <p>Name : {pokemon.name} </p>
        <p>Height : {pokemon.height} </p>
        <p>Weight : {pokemon.weight} </p>
        <p>Type : {pokemon.type}</p>
        </div>

        </div>


    </DivWrapper>
  )
}

const DivWrapper = styled.div`

background-color: #090d20;
margin: 0;
padding: 0;
height: 100vh;

h1 {
    color: white;
    text-align: center;
    margin-top: 0%;
}

p {
    color: white;
}

.div-content {
    width: 80% ;
    margin: auto;
    display: flex;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;   
}

.infos {
    border: 1px solid white ;
    width: 95% ;
    display: flex;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
    margin-top: 6%;
}

.button {
    width: 95%;
    height: 7vh;
    background-color: #ee639b;
    border-radius: 6px;
    border: solid 1px black;
    font-size: 3.4vh ;
    color: white;
    letter-spacing: 1.9px;
    cursor: pointer;
}

`
