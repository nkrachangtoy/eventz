import React, { useState, useEffect, useContext } from "react"
import  firebase  from "../../firebase/config"
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';


export default function Events() {
  
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
        <DataGrid
          columns={[{ field: 'Event' , flex: 1}, { field: 'Detail' , flex: 1}, { field: 'Location', flex: 1}, { field: 'Date' ,type: 'date', flex: 1}, { field: 'Time', type: 'Time', flex: 0.5}, { field: 'Host' }, { field: 'Status' , flex: 1} ]}
          rows={rows}
        />
    </div>
    )
}