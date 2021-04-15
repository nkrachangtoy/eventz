// Require
const express = require('express')
const {connectDB} = require('./utils/db')
const dotenv = require('dotenv')
const cors = require('cors')
const decodeIDToken = require('./utils/firebaseToken')

//Defining database & router
const eventsRoute = require('./routes/eventsRoute')

// dotenv config
dotenv.config()

// Express app
const app = express()

// CORS
app.use(cors())

// Connect to mongodb
connectDB()

// Firebase middleware
// Will enable when dealing with auth
app.use(decodeIDToken)

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes
app.get('/', (req,res)=>{
  res.send('Hello from express')
})
app.use('/events', eventsRoute)


// Listen
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`)
})