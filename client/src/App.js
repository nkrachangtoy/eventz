import React, { useState, useEffect, useContext } from "react"
import  { firebase }  from "./firebase/config"


export default function App() {
const [user, setUser] = useState(null)


useEffect(() => {
  const userRef = firebase.firestore().collection("users")
  console.log(userRef)
}, [])



  return (
   <>
   
   
   </>
  );
}

