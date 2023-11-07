const User = require('../models/User');


// User registration controller function
exports.registerUser = async (req,res) => {

    try{
        console.log(req.body)
        const inputData = req.body;

        // check user is already registred or not
        const checkUser = await User.findOne({ email:inputData.email });
        if (checkUser){
            return res.status(400).json({error : 'User with this email address already exists'});
        }
        
        // create new user
        const newUser = new User(inputData);
        
        await newUser.save();
        return res.status(201).json({ message: 'User registered successfully' });

    } catch(error){
        return res.status(500).json({ error: 'Registration failed', message: error.message });
    }
};


