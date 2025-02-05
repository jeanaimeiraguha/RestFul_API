const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.json()); // Middleware to parse JSON requests

// Sample users array
let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" }
];

// Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Get a single user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
});

// Create a new user
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    res.json(user);
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.json({ message: "User deleted successfully" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
