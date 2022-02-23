import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"; //Style library
//UseContext
import { UserContext } from "../App";



export default function Home() {

    const [pokemon, setpokemon] = useState({});
    const [id, setID] = useState(1);
    const userContext = useContext(UserContext);

    function changeRandomNumber() {
         return Math.floor(Math.random() * 100) + 1;
      }


    //ComponentDidMount
    useEffect( () => {

        setTimeout(() => {
            
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
            .then (res => {
    
                const namePokemon = res.forms[0].name;
                const typesPokemon = (res.types).map(type => {
                    return type.type.name + ', ';
                })
    
                setpokemon({name : namePokemon, height : res.height, weight : res.weight, type : typesPokemon,});
    
            })
        }, 1000);
        

    }, [id])


  return (
    <DivWrapper>
        <h1>HOME</h1>

        {
            userContext.isLogged ? 
            (   
                    <div className="div-content">
                {
                    pokemon !== false ?
                    (<>
                        <input type="button" value="GET A POKEMON" className="button" onClick={() => {setID(changeRandomNumber)}}/>
                
                        <div className="infos">
                            <p>Name : {pokemon.name} </p>
                            <p>Height : {pokemon.height} </p>
                            <p>Weight : {pokemon.weight} </p>
                            <p>Type : {pokemon.type}</p>
                        </div>
                        </>
                        )
                    :
                    (<p>Loading...</p>)
                }
        
                    </div>
            )
            :
            (
                <div className="div-content">

                    <Link to="/login" className="link"> SE CONNECTER</Link>
                </div>
            )
        }
    
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

.button,
.link {
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

.link {
    text-align: center;
    text-decoration: none;
    padding-top: 2%;
}

`
