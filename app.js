// app.js

const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hey Yall!'));
console.log("I RAN RAN RAN");

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));