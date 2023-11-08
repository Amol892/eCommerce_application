
const userController = require('../controllers/userController');
const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const productController = require('../controllers/productController')
const jwt = require('jsonwebtoken');
require('dotenv').config();
const orderController = require('../controllers/orderController')
const requireAuth = require('../middlewares/jwtauth')
// Access your secret key
const secretKey = process.env.SECRET_KEY;

//Router to register new user
router.post('/register', userController.registerUser);




//Router to login user
router.post('/login', async (req,res)=>{
    const {email, password} = req.body
    console.log(password)
    const user = await User.findOne({email:email})
    
    if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }

    // Compare the provided password with the stored hashed password
    bcrypt.compare(password, user.password, (err, result) => {
    if (err || !result) {
      return res.status(401).json({  message: 'Authentication failed' });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, {
      expiresIn: '1h', // Token expires in 1 hour
    });

    res.status(200).json({ data:user, token:token, message: 'Successfully Logged in' });
    });
});

// Route to get all products
router.get('/allproducts', productController.getAllProducts);

// Route to get products list based on searching
router.get('/allsearchproducts',productController.getSearchProdcuts);

// Route to create new order instance
router.post('/createorder', requireAuth, orderController.createOrder);

// Router to get orders list for cart
router.get('/orderlist/:id', requireAuth, orderController.getOrders);

// Route to delete item from Order model
router.delete('/deleteorder/:id', requireAuth,orderController.deleteOrder);



module.exports = router;
