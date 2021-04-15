// Require
const Event = require('../models/event')

/**
 * GET all event
 * @METHOD GET
 */
module.exports.getAllEvent = async (req,res) => {
    try{
        const events = await Event.find()
      res.send({
        events
      })
    }catch(err){
        console.error(`Something went wrong: ${err}`)
    }
}

/**
 * Create an event
 * @METHOD POST
 */
 module.exports.createEvent = async (req,res) => {
  try{
      const {title, description, location, time} = req.body

      // Create new event
      const event = new Event({
        title,
        description,
        location,
        time,
        createdDate,
      })

      // Save new Event to database
      await event.save()

      res.send(`Event has been created!`)
  }catch(err){
      console.error(`Something went wrong: ${err}`)
  }
}