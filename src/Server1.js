const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db'); // Import the database setup

const app = express();
app.use(cors());
app.use(bodyParser.json());

// API to fetch locations (for now, hardcoded)
app.get('/locations', (req, res) => {
  const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  res.json(locations);
});

// API to fetch appliance types (with search query)
app.get('/appliances', (req, res) => {
  const query = req.query.q;
  db.all("SELECT * FROM appliance_types WHERE type_name LIKE ?", [`%${query}%`], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// API to fetch featured technicians
app.get('/featured-technicians', (req, res) => {
  db.all("SELECT * FROM technicians", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// API to handle user login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.get("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err, row) => {
    if (err || !row) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.json({ message: 'Login successful', user: row });
  });
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
