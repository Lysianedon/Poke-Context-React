import { createContext } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import { ThemeContext } from "styled-components";

//Views
import Home from './components/Home';
import Login from './components/Login';

export const UserContext = createContext();

export default function App() {
  const [isLogged, setLogged] = useState(false);

  const setAuth = () => {
    console.log("prevlog:", isLogged);
    setLogged((prevLogged) => !prevLogged)
  }

  const userContextObject = {
    isLogged : isLogged,
    setAuth : setAuth, 
  }

  return (
    <UserContext.Provider value={userContextObject} > 
    <BrowserRouter>
        <nav style={{backgroundColor : "#090d20", margin: 0}}>
          <ul style={{display: "flex", justifyContent : "flex-end", margin: 0}}>
            <li style={{marginRight : "2%",}}><Link to="/" style={{color: "white", textDecoration: "none", fontSize : "1.7em",}}>HOME</Link></li>
            <li style={{marginRight : "3%",}}><Link to="/login" style={{color: "white", textDecoration: "none", fontSize : "1.7em",}}>LOGIN</Link></li>
          </ul>
        </nav>
        <h3 style={{textAlign: 'center', backgroundColor : '#090d20', color : 'white', margin : 0, pading: '0'}}>Vous êtes connecté: {userContextObject.isLogged.toString()}</h3>

        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
        </Switch>
    </BrowserRouter>
    </UserContext.Provider>

  )
}
