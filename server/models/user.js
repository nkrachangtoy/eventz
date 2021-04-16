// Require
const mongoose = require('mongoose')

// Get the Schema constructor
const Schema = mongoose.Schema

// Using Schema constructor, create userSchema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
})

// userSchema.set('toJSON', {
//     transform: (doc, returnedObject) => {
//         returnedObject.id = returnedObject._id.toString()
//         delete returnedObject._id
//         delete returnedObject._v
//     },
// })

// Create User Model
const User = mongoose.model('User', userSchema)

// Export model
module.exports = User