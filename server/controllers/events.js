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