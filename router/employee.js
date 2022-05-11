const express = require('express')

const router = express.Router()



const expressJOI = require('@escook/express-joi')

const { add_client_schema, delete_client_schema, update_client_schema } = require('../schema/employee')

const userHandler = require('../router_handler/employee')

router.get('/getinfo', userHandler.getinfo)

router.post('/addinfo', userHandler.addinfo)

router.get('/deleteinfo/:id', userHandler.deleteinfo)

router.post('/updateinfo', userHandler.updateinfo)
module.exports = router;