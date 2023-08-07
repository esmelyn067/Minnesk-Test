const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productImage: { type: String, required: true },
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
