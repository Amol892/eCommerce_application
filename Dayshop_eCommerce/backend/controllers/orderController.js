const Order = require('../models/Order');


exports.createOrder = async (req,res) => {
    try {
        
        const inputData = req.body;
        const newOrder = new Order(inputData);
        await newOrder.save();
        return res.status(201).json({message:'Order is added to cart'});
      } catch (error) {
          if (error.name === 'ValidationError') {
            // Handle validation error (e.g., send a response with validation error details)
            return res.status(400).json({ error: error.message });
            } else {
            // Handle other errors
            return res.status(500).json({ error: 'Order creation failed' });
            }
          }
};

exports.getOrders = async (req,res) =>{
      try{

            const userId = req.params.id
            Order.find({user:userId,status:'Processing'}).then((products) => {
              
              return res.status(200).json(products);
            })
            .catch((error) => {
              
              return res.status(500).json({ error: 'Internal Server Error' });
            });
      }catch (error){

      }
};

exports.deleteOrder = async (req,res) =>{
  try{
        const orderId = req.params.id
        console.log(orderId)
        await Order.deleteOne({_id:orderId})
        return res.status(204).json({message:'Cart item deleted successfully'})
  }catch (error){
        return res.status(400).json({error:error})
  }
};