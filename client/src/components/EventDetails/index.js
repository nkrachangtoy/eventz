import React, { useState, useEffect, useContext } from "react"
import  firebase  from "../../firebase/config"
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import {
    Card,
    CardContent,
    Button,
    CardActionArea,
    CardMedia,
    CardActions,
    Box,
    Typography,
    Input,
    RadioGroup,
    Select,
    Checkbox,
    DatePicker,
    Form
  } from "@material-ui/core";





  const useStyles = makeStyles((theme)=>({
    root: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
      card: {
          paddingTop: 100,
          marginTop: 100
      }
}))






export default function EventDetails() {
    const classes = useStyles()
    const handleSubmit = async() => {




    }

    return (
        <>
          <Form>






          </Form>

            {/* <div classes={classes.card}>
            <Typography gutterBottom variant="h5" component="h2">
              Event Description
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A place where React Developpers can meet and share ideas.
            </Typography>
            </div>
            <div>
            <Typography gutterBottom variant="h5" component="h2">
              Location
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              THE PINT VANCOUVER, BC
            </Typography>
            </div>      */}
        </>
    )
}
