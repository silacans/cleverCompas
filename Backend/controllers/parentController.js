const Parent = require('../Models/parentModel')
const mongoose = require('mongoose')
 
// get all parents {reps : 20} will find all the parents were the property is 20
const getParents = async (req, res) => {
    const parents = await Parent.find({}).sort({createdAt: - 1})

    res.status(200).json(parents)
}

// get a single parent
const getParent = async (req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such parent'})
  }

  const parent = await Parent.findById(id) //wont work fully, maybe now

  if(!parent) {
    return res.status(404).json({error: 'No such parent'})
  }

  res.status(200).json(parent)
}

// create a new parent
const createParent = async (req, res) => {
    const {subject, username, email, password, phoneNumber, date } = req.body;

    // add doc to database
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
}

// delete a parent
const deleteParent = async (req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such parent'})
  }

  const parent = await Parent.findOneAndDelete({_id : id})

  if(!parent) {
    return res.status(404).json({error: 'No such parent'})
  }

  res.status(200).json(parent)
}


// update a parent
const updateParent = async (req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such parent'})
  }

  const parent = await Parent.findOneAndUpdate({_id : id}, {
    ...req.body
  })

  if(!parent) {
    return res.status(400).json({error: 'No such parent'})
  }

  res.status(200).json(parent)
}
module.exports = {
    getParents,
    getParent,
    createParent,
    deleteParent,
    updateParent
}