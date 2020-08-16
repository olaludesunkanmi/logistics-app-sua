const express = require('express');
const router = express.Router();
const { signup, login, createUser } = require('../controllers/userController');
const { postOrder, pickOrder, riderMarkOrder, userMarkOrder, getAllReceivedOrder } = require('../controllers/orderController');
const { auth, authRole } = require('../middleware/auth')
const { ROLE } = require('../models/user') 

router.post('/admin/create', auth, authRole(ROLE.ADMIN), createUser);

router.post('/signup', signup);

router.post('/login' , login);

router.post('/order', auth, authRole(ROLE.ADMIN || ROLE.PARTNER), postOrder);

router.get('/order', auth, authRole(ROLE.ADMIN || ROLE.RIDER), pickOrder);

router.put('/rider/order', auth, authRole(ROLE.ADMIN || ROLE.RIDER), riderMarkOrder);

router.put('/user/order', authRole(ROLE.ADMIN || ROLE.USER), userMarkOrder);

router.get('/user/all', auth, authRole(ROLE.ADMIN || ROLE.USER), getAllReceivedOrder);


module.exports = router;