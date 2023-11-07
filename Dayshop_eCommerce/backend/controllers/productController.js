const Product = require('../models/Product')


// Controller function to get a list of all products
exports.getAllProducts = async (req, res) => {
  try {
    // Fetch all products from the database
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    const skip = (page - 1) * limit;

    await Product.find().skip(skip).limit(limit).then((products) => {
      return res.status(200).json(products);
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    });

    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};