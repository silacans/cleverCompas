const mongoose = require('mongoose')

const Schema = mongoose.Schema

const websiteSchema = new Schema({
  subject: {
    type: String,
    required: true //e.g. Math, Science. History
  },
  tutorName: {
    type: String,
    required: true //name of the tutor
  },
  studentName: {
    type: String,
    required: true //name of the student
  },
  parentName: {
    type: String,
    required: true // name of the parent
  },
  duration: {
    type: Number,
    required: true // duration of the session in hours
  },
  ratePerHour: {
    type: Number,
    required: true // cost of the session per hour
  },
  date: {
    type: Date,
    required: true // date of the tutoring session
  },
  email: {
    type: String,
    required: true, // email of tutor/student/parent 
    unique: true //makes sure there aren't duplicates in the Database
  },
  password : {
    type: String,
    required: true, //Password
  }
}, { timestamps: true })

module.exports = mongoose.model('Website', websiteSchema)