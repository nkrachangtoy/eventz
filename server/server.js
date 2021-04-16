// Require
const express = require('express')
const {connectDB} = require('./utils/db')
const dotenv = require('dotenv')
const cors = require('cors')
const decodeIDToken = require('./utils/firebaseToken')

//Defining database & router
const eventsRoute = require('./routes/eventsRoute')
const userRoute = require('./routes/userRoute')

// dotenv config
dotenv.config()

// Express app
const app = express()

// Connect to mongodb
connectDB()

// CORS
app.use(cors())

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Firebase middleware
app.use(decodeIDToken)


// Routes
app.get('/', (req,res)=>{
  res.send('Hello from express')
})
app.use('/events', eventsRoute)
app.use('/users', userRoute)


// Listen
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`)
})