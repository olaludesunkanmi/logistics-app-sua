const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

// A role object to help serve as an helper later on
const ROLE = {
    ADMIN: 'admin',
    RIDER: 'rider',
    PARTNER: 'partner',
    USER: 'user'
  }
 
// User model for storing all the four forms of users  
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
    type: String,
    required: true
    },
    role: {
    type: String,
    default: 'user',
    enum: ["user", "rider", "admin", "partner"]
    },
    accessToken: {
    type: String
    }
});
 
const User = mongoose.model('User', UserSchema);
 
module.exports = { ROLE, User }