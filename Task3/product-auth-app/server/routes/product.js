const express = require('express');
const router = express.Router();

// Import the authentication middleware function
const authMiddleware = require('../middlewares/auth');

// Example of a product data model
const Product = require('../models/Product');

// Route for adding new products
router.post('/products', authMiddleware, async (req, res) => {
  try {
    // Extract product details from the request body
    const { productName, price, description, productImage } = req.body;

    // Create a new product
    const newProduct = new Product({
      productName,
      price,
      description,
      productImage,
    });

    // Save the product to the database
    await newProduct.save();

    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
});

module.exports = router;
