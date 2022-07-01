const express = require('express');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
    return res.json({'message':'Hello, World!'});
});

const auth = require('./routes/auth');
app.use('/api/auth', auth);

app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`);
});