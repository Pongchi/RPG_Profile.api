const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('dotenv').config();
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => console.log("Successfully connected to mongodb"))
    .catch(e => console.log(e));
    
app.get('/', (req, res) => {
    return res.json({'message':'Hello, World!'});
});

const auth = require('./routes/auth');
app.use('/api/auth', auth);

app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`);
});