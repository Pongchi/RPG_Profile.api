const router = require('express').Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    res.json({'message':null, 'path':'/api/auth'});
});

router.post('/create', (req, res) => {
    
});

module.exports = router;