import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email:{
    type: 'string',
    required: true,
    unique: true
  },
  password:{
    type: 'string',
    required: true
  }
})

module.exports = mongoose.models.User || mongoose.model('User', userSchema)
