const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./db'); // Import the database connection function
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
connectToDatabase();

app.use('/auth', authRoutes);
app.use('/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
