
const express = require('express');
const router = express.Router()

router.get('/', (req, res) => { res.send('CSE W01 Project')} )

module.exports = router