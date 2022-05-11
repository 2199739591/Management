const express = require('express')

const router = express.Router()



const expressJOI = require('@escook/express-joi')

const { add_druginfo_schema, delete_druginfo_schema, update_druginfo_schema } = require('../schema/druginfo')

const userHandler = require('../router_handler/druginfo')

router.get('/getinfo', userHandler.getinfo)
router.get('/getinfoByid', userHandler.getinfoByid)


router.post('/addinfo', expressJOI(add_druginfo_schema), userHandler.addinfo)

router.get('/deleteinfo/:id', expressJOI(delete_druginfo_schema), userHandler.deleteinfo)

router.post('/updateinfo/:id', expressJOI(update_druginfo_schema), userHandler.updateinfo)


module.exports = router;