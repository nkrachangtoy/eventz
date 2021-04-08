import React, { useState, useEffect, useContext } from "react"
import  firebase  from "./firebase/config"


export default function App() {
const [user, setUser] = useState(null)
const [email, setEmail] = useState("email")
const [password, setPassword] = useState("password")

const createUser = async (email, password) => {

  try {
    const data = await firebase.auth().createUserWithEmailAndPassword(email, password)
    console.log(data.user.uid)
    console.log('USER CREATED')
  } catch (error) {
    console.log(error)
    console.log("ERROR OCCURED")
  }

}

return (

<div>

 <label>
    email:
    <input type="text" name="name" value={email} onChange={(e)=> setEmail(e.target.value)}/>
  </label>
  <label>
    email:
    <input type="text" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
  </label>
<button onClick={() => createUser(email, password)}>Click me</button> 
</div>
)


}

