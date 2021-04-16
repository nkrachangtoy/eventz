// Require
const express = require('express')
const { registerUser } = require('../controllers/users')

// Init Router 
const router = express.Router()

// Routes
router.post('/', registerUser)

module.exports = router