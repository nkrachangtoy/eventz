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

// Test
app.get('/', (req, res) => {
  const test = database.allEvents()
    res.send({
      test
    })
  }) 


// Listen
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`)
})