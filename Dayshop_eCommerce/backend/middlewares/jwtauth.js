const jwt = require('jsonwebtoken')
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

const requireAuth = (req,res,next) => {

    const token = req.header('Authorization');
    
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, secretKey, { algorithms: ['HS256'] }, (err, decoded) => {
        console.log(decoded)
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        } 

        next();
    });

}

module.exports = requireAuth;