const { User } = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
 
const hashPassword = async function (password) {
 return await bcrypt.hash(password, 10);
}
 
const validatePassword = async function (plainPassword, hashedPassword) {
 return await bcrypt.compare(plainPassword, hashedPassword);
}

//  Controller for user signup
const signup = async (req, res, next) => {
 try {
  const { name, email, password, role } = req.body
  const hashedPassword = await hashPassword(password);
  const newUser = new User({ name, email, password: hashedPassword, role: role || "user" });
  const accessToken = jwt.sign({ userId: newUser._id }, 'secret key', {
   expiresIn: "1d"
  });
  newUser.accessToken = accessToken;
  await newUser.save();
  res.status(201).json({
   data: newUser,
   accessToken
  })
 } catch (error) {
  next(error)
 }
}

//  Controller for user Login
const login = async (req, res, next) => {
    try {
     const { email, password } = req.body;
     const user = await User.findOne({ email });
     if (!user) return next(new Error('Email does not exist'));
     const validPassword = await validatePassword(password, user.password);
     if (!validPassword) return next(new Error('Password is not correct'))
     const accessToken = jwt.sign({ userId: user._id }, 'secret key', {
      expiresIn: "1d"
     });
     res.status(200).json({
      data: { email: user.email, role: user.role },
      accessToken
     })
    } catch (error) {
     next(error);
    }
   }

   //  Controller for Admin User account registration 
   const createUser = async (req, res, next) => {
    try {
     const { name, email, password, role } = req.body
     const hashedPassword = await hashPassword(password);
     const newUser = new User({ name, email, password: hashedPassword, role });
     const accessToken = jwt.sign({ userId: newUser._id }, 'secret key', {
      expiresIn: "1d"
     });
     newUser.accessToken = accessToken;
     await newUser.save();
     res.json({
      data: newUser,
      accessToken
     })
    } catch (error) {
     next(error)
    }
   }

   module.exports = { signup, login, createUser }