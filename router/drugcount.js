const express = require('express')

const router = express.Router()



const expressJOI = require('@escook/express-joi')

const { add_drugcount_schema, delete_drugcount_schema } = require('../schema/drugcount')

const userHandler = require('../router_handler/drugcount')

router.get('/getinfo', userHandler.getinfo)
router.get('/getinfoByName', userHandler.getinfoByName)


router.post('/addinfo', userHandler.addinfo)

router.post('/deleteinfo', userHandler.deleteinfo)

// router.post('/updateinfo/:id', expressJOI(update_drugcount_schema), userHandler.updateinfo)


module.exports = router;