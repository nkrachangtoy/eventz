// Require
const mongoose = require('mongoose')
const User = require('./user')

// Get the Schema constructor
const Schema = mongoose.Schema

// Using Schema constructor, create eventSchema
const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
})

// Create Event Model
const Event = mongoose.model('Event', eventSchema)

// Export model
module.exports = Event