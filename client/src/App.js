import React, { useState } from "react"
import Header from "./components/Header"
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
// import  firebase  from "./firebase/config"

// IMPORT COMPONENTS
import LoginPage from './layouts/LoginPage'
import RegisterPage from "./layouts/RegisterPage"
import NewEvent from "./components/NewEvent";
import Events from "./components/Events";
import EventDetails from "./components/EventDetails";

// Style
import './Styles/main.css'
import { Container } from "@material-ui/core";

export default function App() {
const [user, setUser] = useState(null)


  return (
  <Container class="bg-secondary" maxWidth="lg" maxHeight="300">
  <Router class="bg-dark">
    <Header class="bg-dark"></Header>
    <main style={{marginTop: 100}}>
    <Switch>
      <Route path="/login">
        <LoginPage></LoginPage>
      </Route>
      <Route path="/register">
        <RegisterPage></RegisterPage>
      </Route>
      <Route path="/newEvent">
        <NewEvent></NewEvent>
      </Route>
      <Route path="/events">
        <Events></Events>
      </Route>
      <Route path="/eventDetails">
        <EventDetails></EventDetails>
      </Route>
      <Route path="/">
        <Events></Events>
      </Route>
    </Switch>
    </main>
  </Router>
  </Container>
  )
  }

