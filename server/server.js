// Require
const express = require('express')
const {connectDB} = require('./utils/db')
const dotenv = require('dotenv')

// dotenv config
dotenv.config()

// Express app
const app = express()

// Connect to mongodb
connectDB()

// Middlewares
app.use(express.json)
app.use(express.urlencoded({extended: true}))

// Routes

// Test
app.get('/', (req, res) => {
    res.send("It's working 🤗")
  }) 


// Listen
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`)
})