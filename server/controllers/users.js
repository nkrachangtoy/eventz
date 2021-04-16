// // Require
const User = require('../models/user')


/**
 * REGISTER NEW USER
 * @METHOD POST
 */
module.exports.registerUser = async (req,res) => {
    const {_id, email, firstName, lastName, password} = req.body
    // Create new User
    const user = new User({
      email,
      firstName,
      lastName,
    })
    try{
      // Save new Event to database
      const saveUser = await user.save()
      res.json(saveUser)
  }catch(err){
    res.json({message: err})
  }
    
}
