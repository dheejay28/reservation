const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let reservations = []; // In-memory storage for reservations

// Endpoint to get all reservations
app.get('/api/reservations', (req, res) => {
    res.json(reservations);
});

// Endpoint to add a new reservation
app.post('/api/reservations', (req, res) => {
    const { room, startTime, endTime, course, year } = req.body;

    // Create a reservation object
    const reservation = { room, startTime, endTime, course, year };

    // Push the new reservation into the in-memory storage
    reservations.push(reservation);
    res.status(201).json(reservation); // Respond with the newly created reservation
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
