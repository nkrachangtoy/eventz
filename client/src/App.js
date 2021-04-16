import React, { useState } from "react"
import Header from "./components/Header"
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import  firebase  from "./firebase/config"

// IMPORT COMPONENTS
import LoginPage from './layouts/LoginPage'
import RegisterPage from "./layouts/RegisterPage"
import NewEvent from "./components/NewEvent";
import Events from "./components/Events";
import EventDetails from "./components/EventDetails";

// Style
import './Styles/main.css'
import { Container } from "@material-ui/core";
import { filterGridStateSelector } from "@material-ui/data-grid";

export default function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false)

// Check if user is logged in
firebase.auth().onAuthStateChanged((user) => {
  return user ? setIsLoggedIn(true) : setIsLoggedIn(false)
})

console.log('logged in?', isLoggedIn)


  return (
  <Container class="bg-secondary" maxWidth="lg" maxHeight="300">
  <Router class="bg-dark">
    <Header class="bg-dark" isLoggedIn={isLoggedIn}></Header>
    <main style={{marginTop: 100}}>
      {!isLoggedIn
      ? (
        <>
        <Switch>
          <Route path="/events">
            <Events></Events>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/register">
            <RegisterPage></RegisterPage>
          </Route>
          <Route path="/">
            <LoginPage></LoginPage>
          </Route>
        </Switch>
        </>
      ) : (
        <>
        <Switch>
          <Route path="/newEvent">
            <NewEvent></NewEvent>
          </Route>
          <Route path="/events">
            <Events></Events>
          </Route>
          <Route path="/events/:id">
            <EventDetails></EventDetails>
          </Route>
          <Route path="/">
            <Events></Events>
          </Route>
        </Switch>
        </>
      )
      }
    
    </main>
  </Router>
  </Container>
  )
  }

