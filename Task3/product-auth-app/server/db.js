const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// My MongoDB Atlas connection string
const DB_CONNECTION_STRING = process.env.MONGODB_URI;
const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
};

module.exports = connectToDatabase;
