const mongoose = require('mongoose')

const userRegister = new mongoose.Schema({
    name: {type: String,required: true},
    email: {type: String,required: true,unique: true},
    password: {type: String,required: true},
  })

const register = mongoose.model('registerData', userRegister)

module.exports = { register }