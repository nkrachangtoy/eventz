// Require
const express = require('express')
const {getAllEvent, createEvent} = require('../controllers/events')

// init Router
const router = express.Router()

// Routes
router.get('/', getAllEvent)
router.post('/', createEvent)

module.exports = router