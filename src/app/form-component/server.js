const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL configuration
const pool = new Pool({
  user: 'adarshadhital',
  host: 'localhost',
  database: 'adarshadhital', // Replace with your database name
  password: 'password',
  port: 5432, // Default PostgreSQL port
});

// Define an API route for saving form data
app.post('/api/formdata', async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const query =
      'INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4)';
    const values = [firstname, lastname, email, password];

    await pool.query(query, values);
    res.json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'An error occurred while saving form data' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
