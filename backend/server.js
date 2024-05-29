const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const {register } = require('./registerSchema')
const {login} = require('./loginSchema')

const app = express()
app.use(bodyParser.json())
app.use(cors())

async function connectToDb() {
    try {
        await mongoose.connect('mongodb+srv://prabhakarans2022cse:Prabha45@prabha.9ofmsu3.mongodb.net/?retryWrites=true&w=majority&appName=prabha')
        console.log('DB connection established ;)')
        const port = process.env.PORT || 5100
        app.listen(port, function() {
            console.log(`Listening on port ${port}...`)
        })
    } catch(error) {
        console.log(error)
        console.log('Cloudn\'t establish connection :(')
    }
}
connectToDb()
app.post('/register', async function(request, response) {
    try {
        await register.create({
            "name" : request.name,
            "email" : request.email,
            "password" : request.password
        })
        response.status(201).json({
            "status" : "success",
            "message" : "Register success"
        })
    } catch(error) {
        response.status(500).json({
            "status" : "failure",
            "message" : "Regsiter failure",
            "error" : error
        })
    }
})
// app.post('/login', async function(request, response) {
//     try {
//         await login.create({
//             "email" : request.email,
//             "password" : request.password
//         })
//         response.status(201).json({
//             "status" : "success",
//             "message" : "login success"
//         })
//     } catch(error) {
//         response.status(500).json({
//             "status" : "failure",
//             "message" : "login failure",
//             "error" : error
//         })
//     }
// })