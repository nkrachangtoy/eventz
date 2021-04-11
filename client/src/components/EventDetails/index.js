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
}))



export default function EventDetails() {
    const classes = useStyles();
    return (
        <>
        <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Event Description
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A place where React Developpers can meet and share ideas.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Location
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              THE PINT VANCOUVER, BC
            </Typography>
            <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          </CardContent>
        </CardActionArea>
      </Card>
        </>
    )
}
