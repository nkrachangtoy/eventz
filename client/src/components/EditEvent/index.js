import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { createEvent } from '../../network/events'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
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

export default function EditEvent() {
    const classes = useStyles();
    const history = useHistory()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [location, setLocation] = useState()
    const [time, setTime] = useState()

    const handleEditEvent = (e) => {
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
            <Link to="/events"><h3> EDIT EVENT</h3></Link>
            <br></br>
            <h2>Event Details</h2>

            <form onSubmit={handleEditEvent} className={classes.root} noValidate autoComplete="off">
            <h3></h3>   
               
               
                <div>
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Title"
                    multiline
                    rowsMax={4}
                    onChange={({target})=> setTitle(target.value)}
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Description"
                    multiline
                    rowsMax={4}
                    onChange={({target})=> setDescription(target.value)}
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Location"
                    multiline
                    rowsMax={4}
                    onChange={({target})=> setLocation(target.value)}
                    variant="outlined"
                    />
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Duration"
                    multiline
                    rowsMax={4}
                    onChange={({target})=> setTime(target.value)}
                    variant="outlined"
                    />
                    <br />
                    <button class=" m-4 btn btn-dark" type="submit">Create Event</button>
                </div>
            </form>
        </div>
    )
}
