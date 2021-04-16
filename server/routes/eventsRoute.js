// Require
const express = require('express')
const {getAllEvent, createEvent, getEventById} = require('../controllers/events')

// init Router
const router = express.Router()

// Routes
router.get('/', getAllEvent)
router.get('/:_id', getEventById)
router.post('/', createEvent)

module.exports = router