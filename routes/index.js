
const express = require('express');
const router = express.Router()
router.use('/', require('./swagger'))

router.get('/', (req, res) => { 
    //#swagger.tags = ['Hello world']
    res.send('CSE W01 Project')}
 )

// router.get('/users', require('./users'))


module.exports = router