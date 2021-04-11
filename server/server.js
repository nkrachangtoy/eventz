// Require
const express = require('express')
const {connectDB} = require('./utils/db')
const dotenv = require('dotenv')

//Defining database & router
const database = require('./fakeDatabase')
const makeEventsRouter = require('./routers/eventsRouter')

// dotenv config
dotenv.config()

// Express app
const app = express()

// Connect to mongodb
connectDB()

// Routes
const eventsRouter = makeEventsRouter({database})
app.use("/api/events", eventsRouter)

console.log(database.allEvents())


// Test
app.get('/', async (req, res) => {
  
    res.send({
      message: "It's working"
    })
  }) 

  // app.get('/events', async (req, res) => {
  //   const events = await database.allEvents()
  //     res.send({
  //       events
  //     })
  //   }) 

// Listen
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`)
})