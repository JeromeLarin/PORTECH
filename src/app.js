const express = require('express');
const app = express();
const connectDb = require('./db/db');
const userRoute = require('./routes/user.route');

connectDb;

app.use(express.json());
app.use('/post', userRoute);

module.exports = app;
