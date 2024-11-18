//const require = require(express)
const express = require('express')
const Website = require('../Models/websiteModel')

const router = express.Router()

//GET all {things like website im assuming}
router.get('/', (req, res) => {
    res.json({mssg: 'GET all thingssss'})
})
//GET a single {thing}
router.get('/:id',(req, res) => {
    res.json({mssg: 'GET a singleeee'})
})

// POST a new website
router.post('/', async (req, res) => {
  const {subject, username, role, duration, date, email, password, phoneNumber, ratePerHour } = req.body;

  try {
    const website = await Website.create({
      subject,
      username,
      role,
      duration,
      date,
      email,
      password,
      phoneNumber,
      ratePerHour,
    })

    res.status(200).json(website)
  } 
  catch (error) {
    res.status(400).json({ error: error.message})
  }
})


// DELETE a {thing}
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a thing'})
})

// UPDATE a {thing}
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a thing'})
})

module.exports = router