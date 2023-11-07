
const userController = require('../controllers/userController');
const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const productController = require('../controllers/productController')
const jwt = require('jsonwebtoken');
require('dotenv').config();

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

// Define a route to get all products
router.get('/allproducts', productController.getAllProducts);


module.exports = router;
