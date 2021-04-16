import React, { useState } from "react"
import {Link} from 'react-router-dom'
import  firebase  from "../../firebase/config"


export default function Login() {
    const [email, setEmail] = useState("email")
    const [password, setPassword] = useState("password")
    
    const handleUserLogin = async (e) => {
      e.preventDefault()
        try {
          const data = await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
          console.error('Incorrect email or password')
        }
    
      }
      return (
        <div className="login-wrapper">
          <div className="login-header-wrapper">
            <span className="login-text__header">Log In</span>
            <span className="login-text__subheader">Welcome, we missed you!</span>
          </div>
          <form className="login-form" onSubmit={handleUserLogin}>
            <label className="login-form__label" for="email">
              Email
            </label>
              <input 
                className="login-form__input"
                type="text" 
                name="email" 
                placeholder="Email"
                onChange={({target})=> setEmail(target.value)}
              />
            <label className="login-form__label" for="password">
              Password
            </label>
              <input 
                className="login-form__input" 
                type="password" 
                name="password" 
                placeholder="Password"
                onChange={({target})=> setPassword(target.value)}
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
            <button className="login-form__button" type="submit">Log in</button> 
          </form>
          <div>
            <span>Not a member?</span>
            <span>Signup here →</span>
          </div>
        </div>
      )
}
