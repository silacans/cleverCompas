const express = require('express')
const Tutor = require('../Models/tutorModel')

const router = express.Router()

//GET all {tutors}
router.get('/', (req, res) => {
    res.json({mssg: 'GET all tutors'})
})

//GET a single {tutor}
router.get('/:id',(req, res) => {
    res.json({mssg: 'GET a single tutor'})
})

// POST a new tutor
router.post('/', async (req, res) => {
  const {subject, username, email, password, phoneNumber, duration, date } = req.body;

  try {
    const tutor = await Tutor.create({
      subject,
      username,
      email,
      password,
      phoneNumber,
      duration,
      date,
    })

    res.status(200).json(tutor)
  } 
  catch (error) {
    res.status(400).json({ error: error.message})
  }
})

// DELETE a {tutor}
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a tutor'})
})

// UPDATE a {tutor}
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a tutor'})
})

module.exports = router