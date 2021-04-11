
const bcrypt = require("bcryptjs")


const users = [
    {
      "_id": "60233a4535652202794a1be4",
      "username": 'AJ',
      "password": '$2b$12$iuGMRmnF87pRufuqvKL2F.LfKN7aipZcm6QVfWtWulGXmfkSSxu4.' 
      // password1 hashed using bcrypt
    }
  ]
  const posts = [
    {
      "_id": "602346410afb530705e05e1f",
      "type": "url",
      "imageUrl": "https://i.imgur.com/aVqLAG7.png",
      "description": "It's in the shed",
      "totalLikes": 0,
      "totalComments": 0,
      "user": {
          "username": "AJ",
          "_id": "60233a4535652202794a1be4"
      }
    }
  ]
  const comments = [
    {
          "_id": "60238094f1d406223fea9093",
          "text": "Some comment",
          "postId": "602346410afb530705e05e1f",
          "user": {
              "username": "AJ",
              "_id": "60233a4535652202794a1be4"
          }
      }
  ]
  
  async function allPosts() {
    return posts
  }
   exports.allPosts = allPosts
  

  async function createPost({postDetails, user}) {
    const id = posts.length + 1
    const post = {
      _id: ""+id,
      ...postDetails,
      user
    }
    posts.push(post)
    return post
  }
  exports.createPost = createPost


  async function createUser({email, username, password}) {
    //hash the password given by user
    const encrypted = await bcrypt.hash(password, 12)
    //reset the plain text password
    password = null

    const id = users.length + 1
    //creating new user
    //and assigning prop
    //parameters to it
    const user = {
      _id: id,
      email: email,
      username,
      password: encrypted
    }
    //pushing to users object
    users.push(user)
    return user
  }
  exports.createUser = createUser


  async function getUser({username, password}) {

    //Get user with provided username
    const user = users.find(user => (user.username === username))

    //if no user, exit function
    //and return "no user" message
    if(!user) {
      //Pass the error to server
      throw Error("Incorrect Username")
    }

    //compare password to stored value in database
    const passwordMatched = await bcrypt.compare(password, user.password)

    if(!passwordMatched) {
      //Pass the error to server
      throw Error("Incorrect Password")
    }

    return user
  }
  exports.getUser = getUser


  
  async function getPost({postId}) {
    //finding the post
    //that match the passed id
    return posts.find(post => (post._id === postId))
  }
  exports.getPost = getPost


  
  async function getPostComments({postId}) {
    return comments.filter(comment => (comment.postId === postId))
  }
  exports.getPostComments = getPostComments


  
  async function createComment({commentDetails, postId, user}) {
    const id = comments.length + 1
    const comment = {
      _id: id,
      ...commentDetails,
      postId,
      user
    }
    //push comment to object
    comments.push(comment)
    return comment
  }
  exports.createComment = createComment
  

  //Get all comments
  async function allComments() {
    return comments
  }
   exports.allComments = allComments
