import React from 'react'
import  firebase  from "../../firebase/config"


export default function Header() {

    const logout = async () => {
        try {
            await firebase.auth().signOut()
            console.log('user sucesffuly logged out')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <ul>
                <li><a href="default.asp">Home</a></li>
                {/* <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li> */}
                <li>
                    <a href="about.asp"><button onClick={() => logout()}>Logout</button></a>
                </li>
            </ul>
        </div>


        
    )
}
