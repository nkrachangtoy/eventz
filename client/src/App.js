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
// import  firebase  from "./firebase/config"


export default function App() {
const [user, setUser] = useState(null)


  return (
  <Router>
    <HeaderNavigation></HeaderNavigation>
    <main style={{marginTop: 100}}>
    <Switch>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/register">
        <Register></Register>
      </Route>
      {/* <Route path="/profile">
        <p>Profile Page</p>
      </Route>
      <Route path="/newPost">
        <p>Create New Post Page</p>
      </Route>
      <Route path="/posts/:postId">
        <PostDetailsPage></PostDetailsPage>
      </Route> */}
      <Route path="/">
        
      </Route>
    </Switch>
    </main>
  </Router>
  )
  }

