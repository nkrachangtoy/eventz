import React, { useState, useEffect, useContext } from "react"
import Header from "./components/Header"
import Login from "./components/Login"
import Register from "./components/Register"
// import  firebase  from "./firebase/config"


export default function App() {
const [user, setUser] = useState(null)


  return (
    <>
    <Header />
    <Login></Login>
    <Register></Register>
    </>
  )
  }

