const express = require('express')

module.exports = function({database}) {
  const router = express.Router()


  router.get('/', async (req, res) => {
    const events = await database.allEvents()
      res.send({
        events
      })
    }) 
  
//   router.post("/", async (req,res) =>{
  
//     const {...postDetails} = req.body
//     const user = {
//       "username": "Yaro",
//       "_id": "60233a4535652202794a1be434434"
//     }
//     const post = await database.createPost({postDetails, user})
//     res.send({
//       post
//     })
//   })
  
//   router.get("/:id", async (req,res) => {
//     const id = req.params.id
//     const comments = []
//     //sending id from path
//     //as the id to the
//     // getPost method
//     const post = await database.getPost({postId: id})
//     res.send({
//       post, comments
//     })
//   })
  
//   router.post("/:id/comments", async (req,res) => {
//     const user = {
//       "username": "Yaro",
//       "_id": "60233a4535652202794a1be434434"
//     }
//     const commentDetails = req.body
//     const postId = req.params.id
//     const comment = await database.createComment({commentDetails, postId, user})
//     res.send({
//       comment
//     })
//   })
  
//   router.get("/:id/comments", async (req,res) =>{
//     postId = req.params.id
  
//     const commentsArray = await database.getPostComments({postId})
//     res.send({
//       commentsArray
//     })
//   })


  return router
}