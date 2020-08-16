const jwt = require('jsonwebtoken')
const { User } = require('../models/user')

//  middleware for authenticating user logging in
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'secret key')
        const user = await User.findOne({ _id: decoded.userId })
        if (!user) {
            throw new Error('Please authenticate');
        }

        req.token = token
        req.user = user
      return next()
    } catch (e) {
        return res.status(401).send(e)
    }
}


module.exports = auth 

