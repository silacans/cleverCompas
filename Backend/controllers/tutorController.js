const Tutor = require('../Models/tutorModel')
const mongoose = require('mongoose')
 
// get all tutors {reps : 20} will find all the tutors where the property is 20
const getTutors = async (req, res) => {
    const tutors = await Tutor.find({}).sort({createdAt: - 1})

    res.status(200).json(tutors)
}

// get a single tutor
const getTutor = async (req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such tutor'})
  }

  const tutor = await Tutor.findById(id) //wont work fully, maybe now

  if(!tutor) {
    return res.status(404).json({error: 'No such tutor'})
  }

  res.status(200).json(tutor)
}

// create a new tutor
const createTutor = async (req, res) => {
    const {subject, username, email, password, phoneNumber, duration, date } = req.body;

    // add doc to database
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
}

// delete a tutor
const deleteTutor = async (req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such tutor'})
  }

  const tutor = await Tutor.findOneAndDelete({_id : id})

  if(!tutor) {
    return res.status(404).json({error: 'No such tutor'})
  }

  res.status(200).json(tutor)
}


// update a tutor
const updateTutor = async (req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such tutor'})
  }

  const tutor = await Tutor.findOneAndUpdate({_id : id}, {
    ...req.body
  })

  if(!tutor) {
    return res.status(400).json({error: 'No such tutor'})
  }

  res.status(200).json(tutor)
}
module.exports = {
    getTutors,
    getTutor,
    createTutor,
    deleteTutor,
    updateTutor
}