const router = require('express').Router()
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')
// const { Router } = require('express')

router.use('/api-docs', swaggerUI.serve)
router.get('/api-docs', swaggerUI.setup(swaggerDocument))

module.exports = router


