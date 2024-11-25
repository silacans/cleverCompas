const express = require('express')
//const Tutor = require('../Models/tutorModel')
const {
  createTutor,
  getTutors,
  getTutor,
  deleteTutor,
  updateTutor
} = require('../controllers/tutorController')

const router = express.Router()

//GET all {tutors}
router.get('/', getTutors)

//GET a single {tutor}
router.get('/:id', getTutor)

// POST a new {tutor}
router.post('/', createTutor)

// DELETE a {tutor}
router.delete('/:id', deleteTutor)

// UPDATE a {tutor}
router.patch('/:id', updateTutor)

module.exports = router