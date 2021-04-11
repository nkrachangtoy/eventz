import React, { useState, useEffect, useContext } from "react"
import  firebase  from "../../firebase/config"
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardContent,
    Button,
    CardActionArea,
    CardMedia,
    CardActions,
    Box,
    Typography,
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
    const classes = useStyles();
    return (
        <>
            <div classes={classes.card}>
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
            </div>     
        </>
    )
}
