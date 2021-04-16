import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { getEvents } from '../../network/events'
import { Link } from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme)=>({

}))


export default function Events() {
  const classes = useStyles();
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const fetchedEvents = await getEvents()
      setEvents(fetchedEvents)
    }
    fetchEvents()
  }, [])


      return (
      <div style={{ height: 300, width: '80%', margin: '0 auto' }}>
          <Box>
          <h1>Events</h1>
          </Box>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Location</TableCell>
                  <TableCell align="right">Duration</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {events.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                    <TableCell align="right">{row.location}</TableCell>
                    <TableCell align="right">{row.time}</TableCell>
                    <TableCell align="right"><Link>Join</Link></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          

      </div>
      )
}