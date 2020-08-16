const express = require('express');
const router = express.Router();
const { signup, login, createUser } = require('../controllers/userController');
const { postOrder, pickOrder, riderMarkOrder, userMarkOrder, getAllReceivedOrder } = require('../controllers/orderController');
const  auth  = require('../middleware/auth')

router.post('/admin/create', auth, createUser);

router.post('/signup', signup);

router.post('/login' , login);

router.post('/order', auth, postOrder);

router.get('/order', auth, pickOrder);

router.put('/rider/order', auth, riderMarkOrder);

router.put('/user/order', userMarkOrder);

router.get('/user/all', auth, getAllReceivedOrder);


module.exports = router;