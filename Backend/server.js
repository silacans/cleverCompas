require('dotenv').config()


const express = require('express')
const routes = require('./routes/routes.js') 

//creating an express app
const app = express()

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//route handler
app.use('/api/routes', routes)


//listing for request 
app.listen(process.env.PORT, () => {
console.log('Listing port', process.env.PORT)

}) 


