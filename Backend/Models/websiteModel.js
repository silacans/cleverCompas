const mongoose = require('mongoose')

const Schema = mongoose.Schema

const websiteSchema = new Schema({
  subject: {
    type: String,
    required: false //e.g. Math, Science. History, choose what is applicable
  },
  username: {
    type: String,
    required: true //name of the user, then filters the user into their role
  },
  role: {
    type: String,
    required: true,
    enum: ['student', 'tutor', 'parent']
  },
  duration: {
    type: Number,
    required: true // duration of the session in hours
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
  password: {
    type: String,
    required: true, //Password
  },
  phoneNumber: {
    type: String,
    required: false // phone number is optional
  },
  ratePerHour: {
    type: Number,
    required: function () { return this.role === 'tutor'; }, // Only required for tutors
    validate: {
      validator: function (value) {
        // Ensure ratePerHour is only set for tutors
        return this.role === 'tutor' || value == null;
      },
      message: 'Only tutors can have a ratePerHour.'
    }
  }
}, { timestamps: true })


module.exports = mongoose.model('Website', websiteSchema)