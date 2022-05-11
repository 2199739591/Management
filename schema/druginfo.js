//放信息的验证信息，并发给router下的druginfo
const joi = require('joi')

const id = joi.number().integer().min(1).required().error(new Error('id格式不正确'))
const name = joi.string().min(1).max(10).required().error(new Error('name格式不正确'))
const functions = joi.string().error(new Error('functions不正确'))
const adreaction = joi.string().error(new Error('adreaction不正确'))
const taboo = joi.string().error(new Error('taboo不正确'))

const prescription = joi.string().error(new Error('prescription不正确'))
const specification = joi.string().error(new Error('specification不正确'))



// id,name,functions(作用),adreaction（不良反应）,taboo（禁忌）,prescription（处方）,specification（规格




exports.add_druginfo_schema = {
    body: {
      name,
      functions,
      adreaction,
      taboo,
      prescription,
      specification
    }
  },
  exports.delete_druginfo_schema = {
    params: {
      id
    }
  },


  exports.update_druginfo_schema = {
    body: {
      name,
      functions,
      adreaction,
      taboo,
      prescription,
      specification
    }
  }