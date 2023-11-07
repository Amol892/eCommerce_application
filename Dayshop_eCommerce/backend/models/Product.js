const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  handle: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  vendor: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  option1Name: String,
  option1Value: String,
  option2Name: String,
  option2Value: String,
  option3Name: String,
  option3Value: String,
  variantSku: {
    type: String,
    required: true,
  },
  variantGrams: Number,
  variantInventoryTracker: String,
  variantInventoryQty: Number,
  variantInventoryPolicy: String,
  variantFulfillmentService: String,
  variantPrice: Number,
  variantCompareAtPrice: Number,
  imageSrc: String,
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;