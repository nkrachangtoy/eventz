import React, { useState, useEffect } from "react"
import  firebase  from "../../firebase/config"
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Button,
  TextField,
  Typography,
  Box
} from "@material-ui/core";
import {getEvents, postEvent} from '../../network/events'


const useStyles = makeStyles((theme)=>({
  // root:{
  //     maxWidth: "400px",
  //     maxHeight: "464px",
  //     padding: "48px 40px",
  // },
  // input: {
  //   marginBottom: 10,
  //   borderRadius: "50%"
  // },
  // inputForm: {
  //   '& > *': {
  //     margin: "24px 0"
  //   },
  // },
  // title:{
  //     marginLeft: 20,
  // }
}))


export default function Events() {
  const classes = useStyles();


  //Static Data
  const rows = [
              {
                id: 1,
                Event: 'React Vancouver',
                Detail: 'Meetup for React Devs',
                Location: 'Downtown',
                Date: '2021-04-10',
                Time: '18:00',
                Host: 'Jonathan',
                Status: 'Open'
              },
            {
              id: 2,
              Event: 'SQL Vancouver',
              Detail: 'Meetup for SQL Devs',
              Location: 'Downtown',
              Date: '2021-04-10',
              Time: '18:00',
              Host: 'Jonathan',
              Status: 'Open'
            },
            {
            id: 3,
            Event: 'Mongo Vancouver',
            Detail: 'Meetup for Mongo Devs',
            Location: 'Downtown',
            Date: '2021-04-10',
            Time: '18:00',
            Host: 'Jonathan',
            Status: 'Open'
          }
  ]
    
      return (
      <div style={{ height: 300, width: '100%' }}>
          <Box>
          <h1>Events</h1>
          </Box>

          <DataGrid
            columns={[{ field: 'Event' , flex: 1}, { field: 'Detail' , flex: 1}, { field: 'Location', flex: 1}, { field: 'Date' ,type: 'date', flex: 1}, { field: 'Time', type: 'Time', flex: 0.5}, { field: 'Host' }, { field: 'Status' , flex: 1} ]}
            rows={rows}
          />
      </div>
      )
}