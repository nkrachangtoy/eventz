import React, { useState } from "react"
import  firebase  from "../../firebase/config"
import { registerUser } from "../../network/users"


export default function Register() {
    const [user, setUser] = useState({
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    })

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(() => {
          registerUser(user)
        }).catch((error)=>{
          console.log(error)
        });
      } catch (err) {
        console.log(err)
      }
      setUser({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
      })
    }
    
      return (
        <div className="login-wrapper">
          <div className="login-header-wrapper">
            <span className="login-text__header">Sign Up</span>
            <span className="login-text__subheader">Don't have an account?</span>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <label className="login-form__label" for="email">
              Email
            </label>
              <input 
                className="login-form__input"
                type="text" 
                name="email" 
                placeholder="email@email.com"
                onChange={({target})=> setUser({...user, email: target.value})}
              />
            <label className="login-form__label" for="email">
              First name
            </label>
              <input 
                className="login-form__input"
                type="text" 
                name="firstname" 
                placeholder="John" 
                onChange={({target})=> setUser({...user, firstName: target.value})}
              />
            <label className="login-form__label" for="email">
              Last name
            </label>
              <input 
                className="login-form__input"
                type="text" 
                name="lastname" 
                placeholder="Doe"
                onChange={({target})=> setUser({...user, lastName: target.value})}
              />
            <label className="login-form__label" for="password">
              Password
            </label>
              <input 
                className="login-form__input" 
                type="password" 
                name="password" 
                placeholder="Password"
                onChange={({target})=> setUser({...user, password: target.value})}
              />
            {/* <label className="login-form__label" for="confirm_password">
              Confirm Password
            </label>
              <input 
                className="login-form__input" 
                type="password" 
                name="confirm_password" 
              /> */}
            <button className="login-form__button" type="submit">Register!</button> 
          </form>
          <div>
            <span>Already a member?</span>
            <span>Signin here →</span>
          </div>
        </div>
      )
}
