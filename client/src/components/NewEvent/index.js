import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { createEvent } from '../../network/events'


export default function NewEvent() {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [location, setLocation] = useState()
    const [time, setTime] = useState()

    const handleCreateEvent = (e) => {
        e.preventDefault()
         createEvent(title,description,location,time)
    }
    return (
        <div>
            <Link to="/events">View all events</Link>
            <h2>Create new event</h2>
            <form onSubmit={handleCreateEvent}>
                <input 
                    type="text"
                    placeholder="Title"
                    onChange={({target})=> setTitle(target.value)}
                />
                <br />
                <input 
                    type="text"
                    placeholder="Description"
                    onChange={({target})=> setDescription(target.value)}
                />
                <br />
                <input 
                    type="text"
                    placeholder="Location"
                    onChange={({target})=> setLocation(target.value)}
                />
                <br />
                <input 
                    type="text"
                    placeholder="Duration"
                    onChange={({target})=> setTime(target.value)}
                />
                <br />
                <button type="submit">Create Event</button>
            </form>
        </div>  
    )
}
