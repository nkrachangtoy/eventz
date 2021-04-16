// Require
const Event = require('../models/event')

/**
 * GET all event
 * @METHOD GET
 */
module.exports.getAllEvent = async (req,res) => {
    try{
      const events = await Event.find()
      res.json(events)
    }catch(err){
      res.json({message: err})
    }
}

/**
 * GET event by id
 * @METHOD GET
 */
 module.exports.getEventById = async (_id) => {
  try{
    const event = await Event.findById(_id)
    res.json(event)
  }catch(err){
    res.json({message: err})
  }
}

/**
 * Create an event
 * @METHOD POST
 */
 module.exports.createEvent = async (req,res) => {
    const {title, description, location, time} = req.body

    // Create new event
    const event = new Event({
      title,
      description,
      location,
      time,
    })
    try{
      // Save new Event to database
      const saveEvent = await event.save()
      res.json(saveEvent)
  }catch(err){
    res.json({message: err})
  }
}

// /**
//  * Edit an event
//  * @METHOD PATCH
//  */
//  module.exports.createEvent = async (req,res) => {

//   const { eventId } = req.params
//   const user = await req.decodedUser
//   const userId = user._id

//   try{
//     const event = await Event.findById(eventId)

//     // Check if user is the author of the event
//     if(!event.author._id.equals(userId)){
//       res.send({Message: "You are not authorized to edit this event!"})
//       return
//     }

//     await Event.findByIdAndUpdate(event._id, req.body)

//     res.send({message: 'Successfully updated event!'})
// }catch(err){
//   res.json({message: err})
// }
// }