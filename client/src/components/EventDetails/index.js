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
          {/* <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Event Description
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
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
        </>
    )
}
