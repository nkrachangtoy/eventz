import React, { useState, useEffect } from "react"
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import { getEvents, postEvent } from '../../network/events'
import axios from '../../network/axios'


const useStyles = makeStyles((theme)=>({

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
          <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-primary ">Create new event</button>
          </div>
          <h1>Events</h1>
          </Box>

          <DataGrid
            columns={[{ field: 'Event' , flex: 1}, { field: 'Detail' , flex: 1}, { field: 'Location', flex: 1}, { field: 'Date' ,type: 'date', flex: 1}, { field: 'Time', type: 'Time', flex: 0.5}, { field: 'Host' }, { field: 'Status' , flex: 1} ]}
            rows={rows}
          />
      </div>
      )
}