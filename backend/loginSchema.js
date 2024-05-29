const mongoose = require('mongoose')

const userLogin = new mongoose.Schema({
    email: {type: String,required: true,unique: true},
    password: {type: String,required: true},
  })

const login = mongoose.model('registerData', userLogin)

module.exports = { login }