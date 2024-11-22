const express = require('express')
const Student = require('../Models/studentModel')

const router = express.Router()

//GET all {students}
router.get('/', (req, res) => {
    res.json({mssg: 'GET all students'})
})

//GET a single {student}
router.get('/:id',(req, res) => {
    res.json({mssg: 'GET a single student'})
})

// POST a new student
router.post('/', async (req, res) => {
  const {subject, username, email, password, phoneNumber, duration, date } = req.body;

  try {
    const student = await Student.create({
      subject,
      username,
      email,
      password,
      phoneNumber,
      duration,
      date,
    })

    res.status(200).json(student)
  } 
  catch (error) {
    res.status(400).json({ error: error.message})
  }
})

// DELETE a {student}
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a student'})
})

// UPDATE a {student}
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a student'})
})

module.exports = router
