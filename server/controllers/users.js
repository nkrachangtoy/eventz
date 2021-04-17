// // Require
const User = require('../models/user')


/**
 * REGISTER NEW USER
 * @METHOD POST
 */
module.exports.registerUser = async (req,res) => {
    const {email, firstName, lastName, password} = req.body
    const auth = req.currentUser
    const userId = auth.user_id
    console.log(userId)
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


/**
 * UPDATE When user when join an event
 * @METHOD PATCH
 */
//  module.exports.updateUserEvent = async (req,res) => {
//   const auth = req.currentUser
//   const userId = auth.user_id
//   console.log(userId)
//   try{
//     // Find User by id
//     const user = await User.findById(userId)
    
//     // Update by id
//     await User.findByIdAndUpdate(user._id, {
//       events: [_id]
//     })
//   }catch(err){
//   res.json({message: err})
//   }
  
// }