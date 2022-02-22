import { createContext } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { ThemeContext } from "styled-components";

//Views
import Home from './components/Home';
import Login from './components/Login';

const UserContext = createContext();

export default function App() {
  const [isLogged, setLogged] = useState(false);

  return (
    <ThemeContext.Provider value = {}> 
    <BrowserRouter>
        <nav style={{backgroundColor : "#090d20", margin: 0}}>
          <ul style={{display: "flex", justifyContent : "flex-end", margin: 0}}>
            <li style={{marginRight : "2%",}}><Link to="/" style={{color: "white", textDecoration: "none", fontSize : "1.7em",}}>HOME</Link></li>
            <li style={{marginRight : "3%",}}><Link to="/login" style={{color: "white", textDecoration: "none", fontSize : "1.7em",}}>LOGIN</Link></li>
          </ul>
        </nav>


        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
        </Switch>
    </BrowserRouter>
    </ThemeContext.Provider>

  )
}
