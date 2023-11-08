const mongoose = require('mongoose')

const orderSchem = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to a User model (if you have one)
        required: true,
      },
      products: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product', // Reference to a Product model
            required: true,
          },
          name:{
            type:String,
            require:true
          },
          quantity: {
            type: Number,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
          photo:{
            type:String,
            require:true
          }
        },
      ],
      status: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending',
      },
      totalAmount: {
        type: Number,
        default : 0
      },
      orderDate: {
        type: Date,
        default: Date.now,
        }
});

const Order = mongoose.model('orders',orderSchem);
module.exports = Order