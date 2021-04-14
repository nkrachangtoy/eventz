import React, { useState } from "react"
import  firebase  from "../../firebase/config"


export default function Register() {
    const [user, setUser] = useState(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
    const createUser = async (email, password) => {
        try {
          const data = await firebase.auth().createUserWithEmailAndPassword(email, password)
          console.log(data.user.uid)
          console.log('User created')
        } catch (error) {
          console.log(error)
          console.log("Error Occured")
        }
    
      }
      return (
        <div className="login-wrapper">
          <div className="login-header-wrapper">
            <span className="login-text__header">Sign Up</span>
            <span className="login-text__subheader">Don't have an account?</span>
          </div>
          <form className="login-form">
            <label className="login-form__label" for="email">
              Email
            </label>
              <input 
                className="login-form__input"
                type="text" 
                name="email" 
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}
              />
            <label className="login-form__label" for="password">
              Password
            </label>
              <input 
                className="login-form__input" 
                type="password" 
                name="password" 
                value={password} 
                onChange={(e)=> setPassword(e.target.value)}
              />
            <label className="login-form__label" for="confirm_password">
              Confirm Password
            </label>
              <input 
                className="login-form__input" 
                type="password" 
                name="confirm_password" 
              />
            <button className="login-form__button" onClick={() => createUser(email, password)}>Register!</button> 
          </form>
          <div>
            <span>Already a member?</span>
            <span>Signin here →</span>
          </div>
        </div>
      )
}
