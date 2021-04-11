// Require
const express = require('express')
const {connectDB} = require('./utils/db')
const dotenv = require('dotenv')
const database = require('./fakeDatabase')

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
    res.send("It's working 🤗")
  }) 


// Listen
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`)
})