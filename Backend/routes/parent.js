const express = require('express')
const Parent = require('../Models/parentModel')

const router = express.Router()

//GET all {parents}
router.get('/', (req, res) => {
    res.json({mssg: 'GET all parents'})
})

//GET a single {parent}
router.get('/:id',(req, res) => {
    res.json({mssg: 'GET a single parent'})
})

// POST a new parent
router.post('/', async (req, res) => {
  const {subject, username, email, password, phoneNumber, date } = req.body;

  try {
    const parent = await Parent.create({
      subject,
      username,
      email,
      password,
      phoneNumber,
      date,
    })

    res.status(200).json(parent)
  } 
  catch (error) {
    res.status(400).json({ error: error.message})
  }
})

// DELETE a {parent}
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a parent'})
})

// UPDATE a {parent}
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a parent'})
})

module.exports = router