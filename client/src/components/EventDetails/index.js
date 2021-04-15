import React, { useState, useEffect, useContext } from "react"
import  firebase  from "../../firebase/config"
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Grid, Paper } from '@material-ui/core';
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
  } from "@material-ui/core";


  const useStyles = makeStyles((theme)=>({
    root: {
        maxWidth: 345,
      },
    avatarRoot: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        },
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

    function FormRow1() {
      return (
        <React.Fragment>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
            <Typography gutterBottom variant="h5" component="h2">
              Event Description
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A place where React Developpers can meet and share ideas.
            </Typography>

            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
            <Typography>TIME</Typography>
            <Typography>2HR</Typography>
            <Typography>12:00PM-2:00PM</Typography>
            </Paper>
          </Grid>
        </React.Fragment>
      );
    }


    function FormRow2() {
      return (
        <React.Fragment>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
            <Typography gutterBottom variant="h5" component="h2">
              Location
            </Typography>
            <Typography>The PINT VANCOUVER BC</Typography>
            <Typography>Google Maps Image</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Typography>ATTENDEES</Typography>
              <span>
              <div className={classes.avatarRoot}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </div>
              </span>
            </Paper>
          </Grid>
        </React.Fragment>
      );
    }



    return (
        <>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow1 />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow2 />
        </Grid>
      </Grid>









        </>
    )
}












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