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

            {/* <form onSubmit={handleEditEvent} className={classes.root} noValidate autoComplete="off"> */}
               
            {/* <div class="row">
                <div class="col">
                <input type="text" class="form-control" placeholder="First name">
                </div>
                <div class="col">
                <input type="text" class="form-control" placeholder="Last name">
                </div>
            </div> */}



    <div class="row">
        <div class="col">test</div>    
    <div class="col">
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
            </div>
            <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
            </div>
        </div>
        <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
        </div>
        <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity"></input>
            </div>
            <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
            </select>
            </div>
            <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip"></input>
            </div>
        </div>
        <div class="form-group">
            <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck"></input>
            <label class="form-check-label" for="gridCheck">
                Check me out
            </label>
            </div>
        </div>
    </div>
        


{/* 
            </form> */}
        </div>
        
    )
}
