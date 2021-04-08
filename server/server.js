const express = require('express')

const app = express()

app.get('/test', (req, res) => {
    res.send("It's working 🤗")
  }) 

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`)
})