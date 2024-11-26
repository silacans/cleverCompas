const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // To load environment variables

// Importing Routes
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all requests 
app.use(bodyParser.json()); // Parse JSON request bodies

// Database Connection
const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mean-app';
mongoose
    .connect(DB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', authRoutes); // Authentication routes
app.use('/api', profileRoutes); //protected routes as we make more routs we add it here

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Clever Campas');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
