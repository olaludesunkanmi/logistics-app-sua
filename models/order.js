const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// Order model
const OrderSchema = new Schema({
    price: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    created_on: {
    type: Date
    },
    rider_delivery_status: {
    type: String,
    default: 'pending',
    enum: ["delivered", "pending", "returned"]
    },
    user_status: {
        type: String,
        default: 'pending',
        enum: ["received", "returned"]
    }
});
 
const Order = mongoose.model('Order', OrderSchema);
 
module.exports = Order;