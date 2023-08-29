const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql'); // Make sure you have mysql package installed
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Replace this with your actual database connection configuration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sql_login', //  database name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});

app.post('/signup/:country', (req, res) => {
    const country = req.params.country;
    const { username, password, email } = req.body;

    // Perform database insertion here using your chosen SQL package
    const query = 'INSERT INTO persons (username, password, email, country) VALUES (?, ?, ?, ?)';
    db.query(query, [username, password, email, country], (error, results) => {
        if (error) {
            console.error('Error inserting user:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.status(201).json({ message: 'User created successfully' });
        }
    });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
