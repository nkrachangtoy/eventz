// require
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

// Mongodb URI link
const dbURI = process.env.URI

module.exports.connectDB = async () => {
    await mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(res => console.log('Connected to Mongodb'))
    .catch(err => console.log(err))
}

