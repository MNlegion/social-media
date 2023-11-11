const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection (replace 'your_database_url' with your actual MongoDB URL)
mongoose.connect('mongodb://localhost:5000/', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes (to be added later)
// Add these lines after the MongoDB connection
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
