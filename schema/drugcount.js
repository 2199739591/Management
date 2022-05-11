//放信息的验证信息，并发给router下的druginfo
const joi = require('joi')

const id = joi.number().integer().min(1).required().error(new Error('id格式不正确'))
const name = joi.string().min(1).max(10).required().error(new Error('name格式不正确'))
const inDate = joi.string().error(new Error('入库时间格式不正确'))
const outDate = joi.string().error(new Error('出库时间格式不正确'))
const count = joi.number().integer().min(1).required().error(new Error("数量格式不正确"))



// id,name,functions(作用),adreaction（不良反应）,taboo（禁忌）,prescription（处方）,specification（规格




exports.add_druginfo_schema = {
    body: {
      name,
      inDate,
      count
    }
  },
  exports.delete_druginfo_schema = {
    body: {
      id,
      outDate,
      count

    }
  }