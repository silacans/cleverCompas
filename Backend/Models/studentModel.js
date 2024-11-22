const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
  subject: {
    type: String,
    required: false //e.g. Math, Science. History, choose what is applicable
  },
  username: {
    type: String,
    required: true //name of the user, then filters the userinto their role
  },
  email: {
    type: String,
    required: true, // email of tutor/student/parent 
    unique: true //makes sure there aren't duplicates in the Database
  },
  password: {
    type: String,
    required: true, //Password
  },
  phoneNumber: {
    type: String,
    required: false // phone number is optional
  },
  duration: {
    type: Number,
    required: true // duration of the session in hours
  },
  date: {
    type: Date,
    required: true // date of the tutoring session
  },

}, { timestamps: true })

module.exports = mongoose.model('Student', studentSchema)