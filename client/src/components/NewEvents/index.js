import React, { useState, useEffect, useContext } from "react"
import  firebase  from "../../firebase/config"


export default function NewEvents() {
    
    return (
        <div>
            <ul>
                <li><a href="default.asp">New Events</a></li>
                {/* <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li> */}
                <li>
                    <a href="about.asp">New Events</a>
                </li>
            </ul>
        </div>


        
    )
}
