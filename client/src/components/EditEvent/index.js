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
    const [duration, setDuration] = useState()

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
                    <select id="inputState" class="form-control" onChange={({target})=> setDuration(target.value)}>
                        <option selected>Duration</option>
                        <option value="0.5">30MIN</option>
                        <option value="1">1HR</option>
                        <option value="2">2HR</option>
                        <option value="3">3HR</option>
                        <option value="4">4HR</option>
                    </select>
                </div>
            </div>
        </div>    

    <div class="col">
        <div class="form-row">
                <div class="form-group col">
                    <label for="inputState">Start Time</label>
                    <select id="inputState" class="form-control"  onChange={({target})=> setTime(target.value)}>
                        <option selected>Time</option>
                        <option value="8">8AM</option>
                        <option value="9">9AM</option>
                        <option value="10">10AM</option>
                        <option value="11">11AM</option>
                        <option value="12">12PM</option>
                        <option value="13">1PM</option>
                        <option value="14">2PM</option>
                        <option value="15">3PM</option>
                        <option value="16">4PM</option>
                        <option value="17">5PM</option>
                        <option value="18">6PM</option>
                        <option value="19">7PM</option>
                        <option value="20">8PM</option>
                        <option value="21">9PM</option>
                        <option value="22">10PM</option>
                    </select>
                </div>
            </div>
        </div>     
    </div>
    <br />
    <button class="ml-2 mb-4 btn btn-dark" type="submit">Edit Event</button>
</form>
</div>      
    )
}
