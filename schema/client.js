//放信息的验证信息，并发给router下的client
const joi = require('joi')

const id = joi.number().integer().min(1).required().error(new Error('id格式不正确'))
const name = joi.string().min(1).max(10).required().error(new Error('name格式不正确'))
const telnumber = joi.string().min(11).max(11).error(new Error('电话格式不正确'))
const address = joi.string().min(1).error(new Error('地址不正确'))
const type = joi.string().min(3).max(3).error(new Error('类型不正确'))






exports.add_client_schema = {
    body: {
      name,
      type,
      telnumber,
      address
    }
  },
  exports.delete_client_schema = {
    params: {
      id
    }
  },


  exports.update_client_schema = {
    body: {
      id,
      name,
      type,
      telnumber,
      address
    }
  }