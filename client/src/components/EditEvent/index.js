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
    <div class="form-row">
        <div class="col">
            <div class="form-row">
                <div class="form-group col">
                <label for="inputEmail4">Event Name</label>
                <input class="form-control" placeholder="Event Name" onChange={({target})=> setTitle(target.value)}></input>
                </div>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Description</label>
                <textarea class="form-control" placeholder="Event Description" id="exampleFormControlTextarea1" rows="3" onChange={({target})=> setDescription(target.value)}></textarea>
            </div>
            <div class="form-row">
                <div class="form-group col">
                <label for="inputEmail4">Location</label>
                <input type="email" class="form-control" placeholder="Location" onChange={({target})=> setLocation(target.value)}></input>
                </div>
            </div>
        </div>

    <div class="col">
        <div class="form-row">
                <div class="form-group col">
                    <label for="inputState">Duration</label>
                    <select id="inputState" class="form-control">
                        <option selected>Duration</option>
                        <option>30MIN</option>
                        <option>1HR</option>
                        <option>2HR</option>
                        <option>3HR</option>
                        <option>4HR</option>
                    </select>
                </div>
            </div>
        </div>    

    <div class="col">
        <div class="form-row">
                <div class="form-group col">
                    <label for="inputState">Start Time</label>
                    <select id="inputState" class="form-control">
                        <option selected>Time</option>
                        <option>8AM</option>
                        <option>9AM</option>
                        <option>10AM</option>
                        <option>11AM</option>
                        <option>12PM</option>
                        <option>1PM</option>
                        <option>2PM</option>
                        <option>3PM</option>
                        <option>4PM</option>
                        <option>5PM</option>
                        <option>6PM</option>
                        <option>7PM</option>
                        <option>8PM</option>
                        <option>9PM</option>
                        <option>10PM</option>
                    </select>
                </div>
            </div>
        </div>     
    </div>

</form>
</div>      
    )
}
