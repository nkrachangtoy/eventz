import React, { useState, useEffect, useContext } from "react"
import  firebase  from "../../firebase/config"


export default function Login() {
    const [user, setUser] = useState(null)
    const [email, setEmail] = useState("email")
    const [password, setPassword] = useState("password")
    
    const loginUser = async (email, password) => {
        try {
          const data = await firebase.auth().signInWithEmailAndPassword(email, password)
          console.log('user logged in')
          console.log(data.user.uid)
        } catch (error) {
          console.log(error)
          console.log("error occured")
        }
    
      }
      return (
        <div>
            <h1>Login</h1>
        <label>
            email:
            <input type="text" name="name" value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </label>
          <label>
            password:
            <input type="text" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
          </label>
        <button onClick={() => loginUser(email, password)}>Click me</button> 
        </div>
      )
}
