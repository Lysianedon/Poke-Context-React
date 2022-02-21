import React from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';

export default function App() {
  return (

    <BrowserRouter>
        <nav style={{backgroundColor : "#090d20", margin: 0}}>
          <ul style={{display: "flex", justifyContent : "flex-end",}}>
            <li style={{marginRight : "2%",}}><Link to="/" style={{color: "white", textDecoration: "none", fontSize : "1.7em",}}>HOME</Link></li>
            <li style={{marginRight : "3%",}}><Link to="/login" style={{color: "white", textDecoration: "none", fontSize : "1.7em",}}>LOGIN</Link></li>
          </ul>
        </nav>


        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
        </Switch>
    </BrowserRouter>

  )
}
