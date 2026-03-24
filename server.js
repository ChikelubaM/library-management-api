require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Import routes
const authorRoute = require('./routes/author.route');
const studentRoute = require('./routes/student.routes');

const app = express();

// Middleware
app.use(express.json());

// Connect routes
app.use('/authors', authorRoute);
app.use('/students', studentRoute);

// DB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to database!');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => {
        console.log('Connection failed!', error);
    });