const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({'message':null, 'path':'/api/auth'});
});

router.post('/create', (req, res) => {
    
});

module.exports = router;