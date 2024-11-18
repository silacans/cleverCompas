require('dotenv').config()



const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/website.js') 

//creating an express app
const app = express()

app.use(express.json())

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//route handler
app.use('/api/website', routes)

// connecting to DB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listing for request once connected to the DB
app.listen(process.env.PORT, () => {
    console.log('Connected to DB, Listing port', process.env.PORT)
    
    }) 
    


})
.catch((error) => {
    console.log(error)
})



