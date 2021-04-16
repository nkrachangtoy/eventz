import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { createEvent } from '../../network/events'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function NewEvent() {
    const classes = useStyles();
    const history = useHistory()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [location, setLocation] = useState()
    const [time, setTime] = useState()


    const handleCreateEvent = (e) => {
        e.preventDefault()
        createEvent(title,description,location,time)
        setTitle('')
        setDescription('')
        setLocation('')
        setTime('')
        history.push('/events')
    }
    return (
        <div>
            <Link to="/events">View all events</Link>
            <h2>Create new event</h2>

            <form onSubmit={handleCreateEvent} className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Title"
                    multiline
                    rowsMax={4}
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Description"
                    multiline
                    rowsMax={4}
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Location"
                    multiline
                    rowsMax={4}
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Duration"
                    multiline
                    rowsMax={4}
                    variant="outlined"
                    />
                </div>
            </form>

            {/* <form onSubmit={handleCreateEvent}>
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
            </form> */}
        </div>  
    )
}
