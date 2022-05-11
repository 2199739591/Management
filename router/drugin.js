const express = require('express')

const router = express.Router()

const expressJOI = require('@escook/express-joi')

const userHandler = require('../router_handler/drugin')

router.get('/getinfo', userHandler.getinfo)
router.post('/searchinfo', userHandler.searchinfo)



module.exports = router;