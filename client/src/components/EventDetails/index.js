import React, { useState, useEffect, useContext } from "react"
import  firebase  from "../../firebase/config"


export default function EventDetails() {
    
    return (
        <div>
            <ul>
                <li><a href="default.asp">Event Details</a></li>
                {/* <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li> */}
                <li>
                    <a href="about.asp">Event Details</a>
                </li>
            </ul>
        </div>


        
    )
}
