const express = require('express')
//const Parent = require('../Models/parentModel')
const {
  createParent,
  getParents,
  getParent,
  deleteParent,
  updateParent
} = require('../controllers/parentController')

const router = express.Router()

//GET all {parents}
router.get('/', getParents)

//GET a single {parent}
router.get('/:id', getParent)

// POST a new parent
router.post('/', createParent)

// DELETE a {parent}
router.delete('/:id', deleteParent)

// UPDATE a {parent}
router.patch('/:id', updateParent)

module.exports = router