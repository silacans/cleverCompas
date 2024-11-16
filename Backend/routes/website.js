//const require = require(express)
const express = require('express')
const Website = require('../Models/websiteModel')

const router = express.Router()

//GET all {things like website im assuming}
router.get('/', (req, res) => {
    res.json({mssg: 'GET all things'})
})
//GET a single {thing}
router.get('/:id',(req, res) => {
    res.json({mssg: 'GET a single'})
})

//missing a POST a new website (with try and catch)

// DELETE a {thing}
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a thing'})
})

// UPDATE a {thing}
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a thing'})
})

module.exports = router