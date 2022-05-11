const express = require('express')

const router = express.Router()



const expressJOI = require('@escook/express-joi')

// const { add_drugout_schema, delete_drugout_schema } = require('../schema/drugout')

const userHandler = require('../router_handler/drugout')

router.get('/getinfo', userHandler.getinfo)
router.post('/searchinfo', userHandler.searchinfo)
  // router.get('/getinfoByName', userHandler.getinfoByName)


// router.post('/addinfo', userHandler.addinfo)

// router.post('/deleteinfo', userHandler.deleteinfo)

// router.post('/updateinfo/:id', expressJOI(update_drugout_schema), userHandler.updateinfo)


module.exports = router;