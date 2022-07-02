const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/rpg_api');
require('dotenv').config();

const DB = mongoose.connection;
DB.on('error', () => console.log("DB Connection Failed!"));
DB.once('open', () => console.log('DB Connected!'));

app.get('/', (req, res) => {
    return res.json({'message':'Hello, World!'});
});

const auth = require('./routes/auth');
app.use('/api/auth', auth);

app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`);
});