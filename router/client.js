const express = require('express')

const router = express.Router()



const expressJOI = require('@escook/express-joi')

const { add_client_schema, delete_client_schema, update_client_schema } = require('../schema/client')

const userHandler = require('../router_handler/client')

router.get('/getinfo', userHandler.getinfo)



router.post('/addinfo', expressJOI(add_client_schema), userHandler.addinfo)

router.get('/deleteinfo/:id', expressJOI(delete_client_schema), userHandler.deleteinfo)

router.post('/updateinfo', userHandler.updateinfo)


module.exports = router;