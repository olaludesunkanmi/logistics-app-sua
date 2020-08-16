const jwt = require('jsonwebtoken')
const { User } = require('../models/user')

//  middleware for authenticating user logging in
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'secret key')
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
    next()
}

//  middleware to authenticate user roles so as to restrict their access
function authRole(role) {
    return async (req, res, next) => {
      console.log(req.body);
      if (req.body.role !== role) {
        return res.status(401).send('Not allowed')
      }
  
      next()
    }
  }

module.exports = { auth, authRole }

