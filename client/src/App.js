import React, { useState, useEffect, useContext } from "react"
import Header from "./components/Header"
import Login from "./components/Login"
import Register from "./components/Register"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NewEvents from "./components/NewEvent";
import NewEvent from "./components/NewEvent";
import Events from "./components/Events";
import EventDetails from "./components/EventDetails";
// import  firebase  from "./firebase/config"


export default function App() {
const [user, setUser] = useState(null)


  return (
  <Router>
    <Header></Header>
    <main style={{marginTop: 100}}>
    <Switch>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/register">
        <Register></Register>
      </Route>
      <Route path="/newEvent">
        <NewEvent></NewEvent>
      </Route>
      <Route path="/events">
        <Events></Events>
      </Route>
      <Route path="/events/:eventsId">
        <EventDetails></EventDetails>
      </Route>
      <Route path="/">
        <Events></Events>
      </Route>
    </Switch>
    </main>
  </Router>
  )
  }

