import React, { useState } from "react"
import {Link, useHistory} from 'react-router-dom'
import  firebase  from "../../firebase/config"


export default function Login() {
    const [user, setUser] = useState(null)
    const [email, setEmail] = useState("email")
    const [password, setPassword] = useState("password")
    const history = useHistory()
    
    const loginUser = async (email, password) => {
        try {
          const data = await firebase.auth().signInWithEmailAndPassword(email, password)
          console.log('user logged in')
          history.push("/events")
          console.log(data.user.uid)
        } catch (error) {
          console.log(error)
          console.log("error occured")
        }
    
      }
      return (
        <div className="login-wrapper">
          <div className="login-header-wrapper">
            <span className="login-text__header">Log In</span>
            <span className="login-text__subheader">Welcome, we missed you!</span>
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
                type="text" 
                name="password" 
                value={password} 
                onChange={(e)=> setPassword(e.target.value)}
              />
              <div className="login-form__radio-wrapper">
                <div>
                  <input type="radio" value="Remember me" name="Remember me"/>
                  <label className="login-form__label" for="Remember me">Remember me</label>
                </div>
                <Link>
                  <span className="login-form__text--forget-password">Forgot Password?</span>            
                </Link>
              </div>
            <button className="login-form__button" onClick={() => loginUser(email, password)}>Log in</button> 
          </form>
          <div>
            <span>Not a member?</span>
            <span>Signup here →</span>
          </div>
        </div>
      )
}
